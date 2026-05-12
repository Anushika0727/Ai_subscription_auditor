import { Tool, AuditRecommendation } from "@/types/audit"

const overlaps = [
  ["Grammarly", "Jasper"],
  ["Notion AI", "ChatGPT Team"]
]

export function detectOverlap(
  tool: Tool,
  allTools: Tool[]
): AuditRecommendation | null {

  for (const [a, b] of overlaps) {

    const hasA = allTools.some(t => t.name === a)
    const hasB = allTools.some(t => t.name === b)

    if (hasA && hasB && tool.name === a) {
      return {
        tool: `${a} + ${b}`,
        currentSpend: tool.monthlySpend,
        recommendedAction: "Consolidate subscriptions",
        savings: 15,
        reason: "Feature overlap detected"
      }
    }
  }

  return null
}