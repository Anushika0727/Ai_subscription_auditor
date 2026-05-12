import { sharedAudit }
from "@/lib/shared-audits"

export const metadata = {
    title: "AI Savings Audit",
    description:
      "See potential savings across AI subscriptions.",
  
    openGraph: {
      title: "AI Savings Audit",
      description:
        "Potential AI subscription savings report.",
      images: [
        "/og-image.png"
      ]
    },
  
    twitter: {
      card: "summary_large_image",
      title: "AI Savings Audit",
      description:
        "Potential AI subscription savings report."
    }
  }
export default function SharedAuditPage() {

  return (
    <main className="min-h-screen p-8">

      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-5xl font-bold">
          ${sharedAudit.monthlySavings}/mo saved
        </h1>

        {sharedAudit.recommendations.map(
          (rec, index) => (

          <div
            key={index}
            className="border rounded-xl p-6"
          >

            <h2 className="text-xl font-bold">
              {rec.tool}
            </h2>

            <p>{rec.reason}</p>

          </div>

        ))}

      </div>

    </main>
  )
}