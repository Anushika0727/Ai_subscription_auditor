import { Tool, AuditRecommendation } from "@/types/audit"

export function detectApiOpportunity(
  tool: Tool
): AuditRecommendation | null {

  if (
    tool.monthlySpend > 50 &&
    tool.usagePercent > 90
  ) {
    return {
      tool: tool.name,
      currentSpend: tool.monthlySpend,
      recommendedAction: "Consider API billing",
      savings: 25,
      reason: "Heavy usage may be cheaper via API pricing"
    }
  }

  return null
}