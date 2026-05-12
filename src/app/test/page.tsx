import { mockTools } from "@/lib/mock-tools"
import { runAudit } from "@/lib/audit-engine"

export default function TestPage() {

  const results = runAudit(mockTools)

  return (
    <div className="p-10">
      <pre>
        {JSON.stringify(results, null, 2)}
      </pre>
    </div>
  )
}