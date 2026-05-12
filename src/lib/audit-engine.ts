import { Tool, AuditRecommendation } from "@/types/audit"

import { detectPlanMismatch } from "./rules/plan-fit"
import { detectDowngrade } from "./rules/downgrade"
import { detectOverlap } from "./rules/overlap"
import { detectAlternative } from "./rules/alternatives"
import { detectApiOpportunity } from "./rules/api-opportunity"

export function runAudit(
  tools: Tool[]
): AuditRecommendation[] {

  const recommendations: AuditRecommendation[] = []

  for (const tool of tools) {

    const checks = [
      detectPlanMismatch(tool),
      detectDowngrade(tool),
      detectOverlap(tool, tools),
      detectAlternative(tool),
      detectApiOpportunity(tool)
    ]

    for (const result of checks) {
      if (result) {
        recommendations.push(result)
      }
    }
  }

  return recommendations
}

export function calculateTotalSavings(
  recommendations: AuditRecommendation[]
): number {

  return recommendations.reduce(
    (sum, rec) => sum + rec.savings,
    0
  )
}
