import type { Drawing, DrawingTool, DrawingPoint } from "./chart-types";

// Note: uuid might not be installed, so I'll use a simple generator if needed
function generateId() {
  return Math.random().toString(36).substring(2, 11);
}

export class DrawingManager {
  private drawings: Drawing[] = [];

  constructor(initialDrawings: Drawing[] = []) {
    this.drawings = initialDrawings;
  }

  getDrawings(): Drawing[] {
    return this.drawings;
  }

  addDrawing(tool: DrawingTool, points: DrawingPoint[], color: string = "#818CF8"): Drawing {
    const newDrawing: Drawing = {
      id: generateId(),
      tool,
      points,
      color,
      lineWidth: 2,
    };
    this.drawings.push(newDrawing);
    return newDrawing;
  }

  updateDrawing(id: string, points: DrawingPoint[]): Drawing | null {
    const drawing = this.drawings.find((d) => d.id === id);
    if (drawing) {
      drawing.points = points;
      return drawing;
    }
    return null;
  }

  removeDrawing(id: string): void {
    this.drawings = this.drawings.filter((d) => d.id !== id);
  }

  clearDrawings(): void {
    this.drawings = [];
  }

  /**
   * Helper to calculate Fibonacci levels between two points
   */
  static calculateFibLevels(p1: DrawingPoint, p2: DrawingPoint): { level: number; price: number }[] {
    const levels = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1];
    const diff = p1.price - p2.price;
    return levels.map((l) => ({
      level: l,
      price: p2.price + diff * l,
    }));
  }
}
