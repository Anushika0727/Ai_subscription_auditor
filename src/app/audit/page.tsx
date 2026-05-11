"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type ToolSpend = {
  tool: string;
  plan: string;
  monthlySpend: string;
  seats: string;
};

export default function AuditPage() {
  const [tools, setTools] = useState<ToolSpend[]>([

    {
      tool: "",
      plan: "",
      monthlySpend: "",
      seats: "",
    },
  ]);
  const [teamSize, setTeamSize] = useState("");
  const [primaryUseCase, setPrimaryUseCase] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/results");
  };

 useEffect(() => {
  const saved = localStorage.getItem("audit-tools");
  
  if (saved) {
    setTools(JSON.parse(saved));
  }
 }, []);
 const savedTeamSize = localStorage.getItem("audit-team-size");
 const savedUseCase = localStorage.getItem("audit-primary-use-case");

 if (savedTeamSize) {
  setTeamSize(savedTeamSize);
 }

 if (savedUseCase) {
  setPrimaryUseCase(savedUseCase);
 }


 useEffect(() => {
   localStorage.setItem("audit-tools", JSON.stringify(tools));
 }, [tools]);
 useEffect(() => {
  localStorage.setItem("audit-team-size", teamSize);
 }, [teamSize]);

 useEffect(() => {
  localStorage.setItem("audit-primary-use-case", primaryUseCase);
 }, [primaryUseCase]);


  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Spend Audit Form</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {tools.map((tool, index) => (
          <div key={index} className="space-y-4 border p-4 rounded">
            <input
              type="text"
              placeholder="Tool"
              value={tool.tool}
              onChange={(e) => {
                const updated = [...tools];
                updated[index].tool = e.target.value;
                setTools(updated);
              }}
              className="border px-4 py-2 rounded bg-white text-black"
            />

            <input
              type="text"
              placeholder="Plan"
              value={tool.plan}
              onChange={(e) => {
                const updated = [...tools];
                updated[index].plan = e.target.value;
                setTools(updated);
              }}
              className="border px-4 py-2 rounded bg-white text-black"
            />

            <input
              type="number"
              placeholder="Monthly Spend"
              value={tool.monthlySpend}
              onChange={(e) => {
                const updated = [...tools];
                updated[index].monthlySpend = e.target.value;
                setTools(updated);
              }}
              className="border px-4 py-2 rounded bg-white text-black"
            />

            <input
              type="number"
              placeholder="Seats"
              value={tool.seats}
              onChange={(e) => {
                const updated = [...tools];
                updated[index].seats = e.target.value;
                setTools(updated);
              }}
              className="border px-4 py-2 rounded bg-white text-black"
            />
          </div>
        ))}

          <input
             type="number"
             placeholder="Team size"
              value={teamSize}
             onChange={(e) => setTeamSize(e.target.value)}
              className="w-full border p-2 rounded bg-white text-black"
          />

        <textarea
           placeholder="Primary use case"
           value={primaryUseCase}
           onChange={(e) => setPrimaryUseCase(e.target.value)}
           className="w-full border p-2 rounded bg-white text-black"
        />

        <button
          type="button"
          onClick={() =>
            setTools([
              ...tools,
              {
                tool: "",
                plan: "",
                monthlySpend: "",
                seats: "",
              },
            ])
          }
          className="border px-4 py-2 rounded bg-white text-black"
        >
          Add tool
          <button
           type="submit"
           className="border px-4 py-2 rounded bg-white text-black"
          >
           Continue
          </button>
        </button>
      </form>
    </main>
  );
}



