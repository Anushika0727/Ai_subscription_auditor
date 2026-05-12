import { supabase } from "@/lib/supabase/server";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

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

export default async function SharedAuditPage({
  params,
}: Props) {

  const { id } = await params;

  const { data } = await supabase
    .from("audits")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    return (
      <main className="p-8">
        Audit not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">

      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-5xl font-bold">
          Shared AI Savings Audit
        </h1>

        <p className="text-gray-500">
          Estimated savings summary
        </p>

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Summary
          </h2>

          <p className="whitespace-pre-line">
            {data.ai_summary}
          </p>

        </div>

        {data.audit_output.map(
          (rec: any, index: number) => (

            <div
              key={index}
              className="border rounded-xl p-6"
            >

              <div className="flex justify-between">

                <div>

                  <h2 className="text-xl font-bold">
                    {rec.tool}
                  </h2>

                  <p>{rec.reason}</p>

                </div>

                <div className="font-bold text-2xl">
                  ${rec.savings}
                </div>

              </div>

            </div>

          )
        )}

      </div>

    </main>
  )
}