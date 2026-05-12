import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {

  const body = await req.json();

  // Honeypot spam protection
  if (body.website) {
    return NextResponse.json(
      { error: "Spam detected" },
      { status: 400 }
    );
  }

  // Simple generated summary
  const summary = `
Estimated monthly savings: $${body.monthlySavings}.
Several overlapping AI subscriptions were detected.
Consolidating tools may reduce unnecessary spend.
`;

  const { data, error } = await supabase
    .from("audits")
    .insert({
      email: body.email,
      company: body.company,
      role: body.role,
      team_size: body.teamSize,

      audit_input: body.auditInput,
      audit_output: body.auditOutput,

      ai_summary: summary,
    })
    .select()
    .single();

  if (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to save audit" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    id: data.id,
  });
}