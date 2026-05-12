"use client";

import { useState } from "react";

export default function AuditForm() {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    console.log("Button clicked"); // 👈 PUT IT HERE

    console.log("Input value:", input);

    const res = await fetch("/api/audit", {
      method: "POST",
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    console.log("Response:", data);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Test input"
      />

      <button onClick={handleSubmit}>
        Run Audit
      </button>
    </div>
  );
}