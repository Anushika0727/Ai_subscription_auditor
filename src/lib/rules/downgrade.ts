import { Tool, AuditRecommendation } from "@/types/audit"

const downgradeMap: Record<
  string,
  {
    cheaperPlan: string
    savings: number
  }
> = {
  "ChatGPT Team": {
    cheaperPlan: "ChatGPT Plus",
    savings: 20
  },

  "Notion Enterprise": {
    cheaperPlan: "Notion Plus",
    savings: 30
  }
}

export function detectDowngrade(
  tool: Tool
): AuditRecommendation | null {

  const match = downgradeMap[tool.name]

  if (!match) return null

  return {
    tool: tool.name,
    currentSpend: tool.monthlySpend,
    recommendedAction: `Switch to ${match.cheaperPlan}`,
    savings: match.savings,
    reason: "Cheaper plan from same vendor available"
  }
}