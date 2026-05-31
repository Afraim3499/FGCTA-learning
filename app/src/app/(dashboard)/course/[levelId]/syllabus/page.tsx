import { getModules } from "@/lib/course-actions";
import { redirect } from "next/navigation";
import Level0SyllabusClient from "./Level0SyllabusClient";

export default async function SyllabusPage({ params }: { params: Promise<{ levelId: string }> }) {
  const { levelId } = await params;
  
  if (levelId !== "0") {
    redirect(`/course/${levelId}`);
  }

  let modules = [];
  try {
    modules = await getModules(0);
  } catch (err) {
    redirect("/course");
  }

  return (
    <Level0SyllabusClient modules={modules} />
  );
}
