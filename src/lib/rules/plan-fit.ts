import { Tool, AuditRecommendation } from "@/types/audit"

export function detectPlanMismatch(
  tool: Tool
): AuditRecommendation | null {

  if (tool.usagePercent < 40) {
    return {
      tool: tool.name,
      currentSpend: tool.monthlySpend,
      recommendedAction: "Downgrade to lower tier",
      savings: Math.round(tool.monthlySpend * 0.4),
      reason: "Low utilization detected"
    }
  }

  return null
}