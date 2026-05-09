
"use client";

export default function AuditPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Spend Audit Form</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Tool"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Plan"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Monthly Spend"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Seats"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Team size"
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Primary use case"
          className="w-full border p-2 rounded"
        />

        <button
          type="button"
          className="border px-4 py-2 rounded"
        >
          Add tool
        </button>
      </form>
    </main>
  );
}