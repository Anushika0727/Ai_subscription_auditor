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