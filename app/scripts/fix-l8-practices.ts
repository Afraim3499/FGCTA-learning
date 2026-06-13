import fs from "fs";
import path from "path";
import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("CRITICAL: OPENAI_API_KEY is not defined.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const level8Dir = path.join(__dirname, "../src/content/level-8");
const files = ["core.ts", "forex.ts", "gold.ts", "crypto.ts"];

interface LessonCard {
  type: string;
  title: string;
  label: string;
  body: string;
  context: any;
  taskData: any;
  visualKey?: string;
}

const systemPrompt = `You are a curriculum quality auditor for Lurnava, an elite trading academy.
Your task is to write a single multiple-choice question for a practice card in a trading module.
The question must test the student's understanding of the specific concept taught in the card.
Use professional, institutional, process-driven language (Lurnava style).

Return ONLY valid JSON matching this schema:
{
  "type": "choice_block",
  "question": "A technical, scenario-based question testing this specific card's skill. Keep it professional and aligned with Lurnava style.",
  "options": [
    { "id": "0", "text": "Correct answer detail...", "isCorrect": true, "feedback": "Detailed explanation of why this is correct." },
    { "id": "1", "text": "Incorrect option...", "isCorrect": false, "feedback": "Detailed explanation of why this is wrong." },
    { "id": "2", "text": "Another incorrect option...", "isCorrect": false, "feedback": "Detailed explanation of why this is wrong." },
    { "id": "3", "text": "Another incorrect option...", "isCorrect": false, "feedback": "Detailed explanation of why this is wrong." }
  ]
}`;

async function callOpenAI(userPrompt: string): Promise<any> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.3,
  });
  return JSON.parse(response.choices[0].message.content || "{}");
}

async function fixPractices() {
  console.log("--- RUNNING LEVEL 8 PRACTICE CARDS RECOVERY ---");

  const modules = fs.readdirSync(level8Dir).filter(name => name.startsWith("module-8-"));
  let fixCount = 0;

  for (const mod of modules) {
    const modDir = path.join(level8Dir, mod);
    for (const file of files) {
      const filePath = path.join(modDir, file);
      if (!fs.existsSync(filePath)) continue;

      const content = fs.readFileSync(filePath, "utf-8");
      const match = content.match(/(export const (\w+Cards): LessonCard\[] = )\[[\s\S]+\];/);
      if (!match) continue;

      const prefix = match[1];
      const varName = match[2];

      const arrayMatch = content.match(/export const \w+Cards: LessonCard\[] = (\[[\s\S]+\]);/);
      if (!arrayMatch) continue;

      try {
        const cards: LessonCard[] = JSON.parse(arrayMatch[1]);
        let modified = false;

        for (let idx = 0; idx < cards.length; idx++) {
          const card = cards[idx];
          if (card.type === "practice" && !card.taskData) {
            console.log(`  Fixing practice card in ${mod}/${file} Card ${idx + 1}...`);
            const userPrompt = `Card Title: "${card.title}"
Card Label: "${card.label}"
Card Body:
${card.body}

Generate the choice block JSON.`;
            
            try {
              const taskData = await callOpenAI(userPrompt);
              card.taskData = taskData;
              modified = true;
              fixCount++;
            } catch (openaiErr) {
              console.error(`  OpenAI error for card in ${mod}/${file}:`, openaiErr);
            }
          }
        }

        if (modified) {
          const newContent = `import { LessonCard } from "../../../types/curriculum";\n\nexport const ${varName}: LessonCard[] = ${JSON.stringify(cards, null, 2)};\n`;
          fs.writeFileSync(filePath, newContent);
          console.log(`✓ Updated ${mod}/${file}`);
        }
      } catch (err) {
        console.error(`Error processing ${mod}/${file}:`, err);
      }
    }
  }

  console.log(`--- PRACTICE CARDS RECOVERY COMPLETE: Fixed ${fixCount} cards ---`);
}

fixPractices().catch(err => {
  console.error("FATAL ERROR:", err);
});
