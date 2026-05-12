import { Tool } from "@/types/audit"

export const mockTools: Tool[] = [
  {
    id: "1",
    name: "ChatGPT Team",
    category: "AI",
    monthlySpend: 40,
    usagePercent: 20,
    vendor: "OpenAI"
  },
  {
    id: "2",
    name: "Notion AI",
    category: "Productivity",
    monthlySpend: 20,
    usagePercent: 90,
    vendor: "Notion"
  },
  {
    id: "3",
    name: "Grammarly",
    category: "Writing",
    monthlySpend: 15,
    usagePercent: 25,
    vendor: "Grammarly"
  },
  {
    id: "4",
    name: "Jasper",
    category: "Writing",
    monthlySpend: 30,
    usagePercent: 70,
    vendor: "Jasper"
  }
]