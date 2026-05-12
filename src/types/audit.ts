export type Tool = {
    id: string
    name: string
    category: string
    monthlySpend: number
    usagePercent: number
    vendor?: string
    seats?: number
  }
  
  export type AuditRecommendation = {
    tool: string
    currentSpend: number
    recommendedAction: string
    savings: number
    reason: string
    severity?: "low" | "medium" | "high"
 }
