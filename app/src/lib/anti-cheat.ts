import { LogicValidator, Zone } from "@/lib/logic-validator";
import { prisma } from "@/lib/prisma";

export type CheatReport = {
  isSuspicious: boolean;
  reason?: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
};

export class AntiCheatEngine {
  /**
   * Re-validates a simulation submission on the server.
   */
  static async validateSubmission(
    userId: string,
    moduleId: string,
    submittedBoxes: any[]
  ): Promise<CheatReport> {
    const module = await prisma.courseModule.findUnique({
      where: { id: moduleId }
    });

    if (!module || !(module as any).correctZones) {
      return { isSuspicious: false, severity: "LOW" };
    }

    const correctZones = (module as any).correctZones as any[];
    if (correctZones.length === 0) return { isSuspicious: false, severity: "LOW" };

    // Basic logic check: Did the user submit anything?
    if (submittedBoxes.length === 0) {
      return { isSuspicious: true, reason: "Empty submission reported as pass", severity: "HIGH" };
    }

    // Server-side re-run of the math
    const latestBox = submittedBoxes[submittedBoxes.length - 1];
    let serverPass = false;

    for (const zone of correctZones) {
      const result = LogicValidator.validateZone(latestBox as Zone, zone as Zone);
      if (result.success) {
        serverPass = true;
        break;
      }
    }

    if (!serverPass) {
      return { 
        isSuspicious: true, 
        reason: "Client reported pass but server math failed validation", 
        severity: "HIGH" 
      };
    }

    return { isSuspicious: false, severity: "LOW" };
  }
}
