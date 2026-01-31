import { prisma } from "./db"

export async function logAction(
  adminUserId: string,
  action: "CREATE" | "UPDATE" | "DELETE",
  entity: string,
  entityId: string,
  changes?: { before?: any; after?: any }
) {
  try {
    await prisma.auditLog.create({
      data: {
        adminUserId,
        action,
        entity,
        entityId,
        changes: changes ? changes as any : null,
      },
    })
  } catch (error) {
    console.error("Failed to log action:", error)
    // Don't throw - audit logging should not break the main flow
  }
}
