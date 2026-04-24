import { prisma } from "./prisma";

export async function logUserEvent(
  userId: string,
  eventType: string,
  metadata: Record<string, any> = {}
) {
  try {
    // Fire and forget (optional: await for critical events)
    await prisma.userEvent.create({
      data: {
        userId,
        eventType,
        metadata,
      },
    });
  } catch (error) {
    console.error("Failed to log analytics event:", error);
  }
}
