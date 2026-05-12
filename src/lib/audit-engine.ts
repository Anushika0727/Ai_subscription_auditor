import { Tool, AuditRecommendation } from "@/types/audit"

import { detectPlanMismatch } from "./rules/plan-fit"
import { detectDowngrade } from "./rules/downgrade"
import { detectOverlap } from "./rules/overlap"
import { detectAlternative } from "./rules/alternatives"
import { detectApiOpportunity } from "./rules/api-opportunity"

export type ToolInput = {
    tool: string;
    plan: string;
    monthlySpend: number;
    seats: number;
  };
  
  export type AuditResult = {
    tool: string;
    currentSpend: number;
    recommendedAction: string;
    savings: number;
    reason: string;
  };
  export function auditTools(
    tools: ToolInput[]
  ): AuditResult[] {
    return tools.map((tool) => {
      if (tool.seats <= 2) {
        return {
          tool: tool.tool,
          currentSpend: tool.monthlySpend,
          recommendedAction: "Downgrade to lower plan",
          savings: 10,
          reason:
            "Low seat count may not require current plan",
        };
      }
  
      return {
        tool: tool.tool,
        currentSpend: tool.monthlySpend,
        recommendedAction: "Keep current plan",
        savings: 0,
        reason: "Current setup appears reasonable",
      };
    });
  }

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