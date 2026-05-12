import { Tool, AuditRecommendation } from "@/types/audit"

const alternatives: Record<
  string,
  {
    alternative: string
    savings: number
  }
> = {
  "Calendly Pro": {
    alternative: "Cal.com",
    savings: 12
  },

  "Otter.ai": {
    alternative: "Whisper API",
    savings: 18
  }
}

export function detectAlternative(
  tool: Tool
): AuditRecommendation | null {

  const match = alternatives[tool.name]

  if (!match) return null

  return {
    tool: tool.name,
    currentSpend: tool.monthlySpend,
    recommendedAction: `Switch to ${match.alternative}`,
    savings: match.savings,
    reason: "Cheaper alternative available"
  }
}