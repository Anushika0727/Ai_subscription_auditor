"use client";

import { mockTools } from "@/lib/mock-tools"
import {
  runAudit,
  calculateTotalSavings
} from "@/lib/audit-engine"

export default function ResultsPage() {

  const recommendations = runAudit(mockTools)

  const monthlySavings =
    calculateTotalSavings(recommendations)

  const annualSavings =
    monthlySavings * 12

  return (
    <main className="min-h-screen p-8">

      <div className="max-w-5xl mx-auto space-y-8">

        <div className="space-y-3">

          <h1 className="text-5xl font-bold">
            ${monthlySavings}/mo saved
          </h1>

          <p className="text-xl text-gray-500">
            Estimated annual savings:
            ${annualSavings}
          </p>

        </div>

        <div className="grid gap-4">

          {recommendations.map((rec, index) => (

            <div
              key={index}
              className="border rounded-xl p-6"
            >

              <div className="flex justify-between">

                <div>
                  <h2 className="text-xl font-semibold">
                    {rec.tool}
                  </h2>

                  <p className="text-gray-500">
                    {rec.reason}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-2xl">
                    ${rec.savings}
                  </p>

                  <p className="text-sm text-gray-500">
                    monthly savings
                  </p>
                </div>

              </div>

              <div className="mt-4">

                <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
                  {rec.recommendedAction}
                </span>

              </div>

            </div>

          ))}

        </div>
        <div className="border rounded-2xl p-8">

          {monthlySavings >= 50 ? (

            <div className="space-y-3">

              <h2 className="text-3xl font-bold">
                You could save significantly.
              </h2>

              <p className="text-gray-600">
                Credex can help optimize your AI stack.
              </p>

              <button className="bg-black text-white px-6 py-3 rounded-xl">
                Book Savings Review
              </button>

        </div>

      ) : (

          <div className="space-y-3">

            <h2 className="text-3xl font-bold">
              Your stack already looks efficient.
            </h2>

            <p className="text-gray-600">
              We found a few smaller optimizations,
              but nothing major.
            </p>

          </div>

      )}

     </div>
      <div className="border rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Save Your Audit
          </h2>

         <form
            className="space-y-4"
            onSubmit={async (e) => {

              e.preventDefault();

              const formData = new FormData(e.currentTarget);

              const payload = {
                email: formData.get("email"),
                company: formData.get("company"),
                role: formData.get("role"),
                teamSize: formData.get("teamSize"),
                website: formData.get("website"),

                monthlySavings,
                annualSavings,

                auditInput: mockTools,
                auditOutput: recommendations,
              };

              const response = await fetch(
                "/api/audit/save",
                {
                   method: "POST",
                   headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
               }
             );

             const result = await response.json();

             console.log(result);
           }}
          >

            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              name="role"
              placeholder="Role (optional)"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              name="teamSize"
              placeholder="Team size (optional)"
              className="w-full border p-3 rounded"
            />

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-xl"
            >
              Save Audit
            </button>

          </form>

        </div>

     </div>

    </main>
  )
}