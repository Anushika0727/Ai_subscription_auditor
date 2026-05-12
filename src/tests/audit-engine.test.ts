import { describe, it, expect } from "vitest"

import { detectPlanMismatch } from "../lib/rules/plan-fit"
import { detectDowngrade } from "../lib/rules/downgrade"
import { detectOverlap } from "../lib/rules/overlap"
import { detectAlternative } from "../lib/rules/alternatives"
import { detectApiOpportunity } from "../lib/rules/api-opportunity"

describe("Audit Engine Rules", () => {

  it("detects low utilization plans", () => {

    const result = detectPlanMismatch({
      id: "1",
      name: "ChatGPT Team",
      category: "AI",
      monthlySpend: 40,
      usagePercent: 20
    })

    expect(result).not.toBeNull()
    expect(result?.recommendedAction)
      .toBe("Downgrade to lower tier")
  })

  it("detects same-vendor downgrade opportunities", () => {

    const result = detectDowngrade({
      id: "2",
      name: "ChatGPT Team",
      category: "AI",
      monthlySpend: 40,
      usagePercent: 60
    })

    expect(result).not.toBeNull()
    expect(result?.recommendedAction)
      .toContain("ChatGPT Plus")
  })

  it("detects overlapping subscriptions", () => {

    const tools = [
      {
        id: "1",
        name: "Grammarly",
        category: "Writing",
        monthlySpend: 15,
        usagePercent: 70
      },
      {
        id: "2",
        name: "Jasper",
        category: "Writing",
        monthlySpend: 30,
        usagePercent: 80
      }
    ]

    const result = detectOverlap(
      tools[0],
      tools
    )

    expect(result).not.toBeNull()
    expect(result?.recommendedAction)
      .toBe("Consolidate subscriptions")
  })

  it("detects cheaper alternatives", () => {

    const result = detectAlternative({
      id: "3",
      name: "Calendly Pro",
      category: "Scheduling",
      monthlySpend: 12,
      usagePercent: 90
    })

    expect(result).not.toBeNull()
    expect(result?.recommendedAction)
      .toContain("Cal.com")
  })

  it("detects API billing opportunities", () => {

    const result = detectApiOpportunity({
      id: "4",
      name: "OpenAI",
      category: "AI",
      monthlySpend: 100,
      usagePercent: 95
    })

    expect(result).not.toBeNull()
    expect(result?.recommendedAction)
      .toBe("Consider API billing")
  })

})