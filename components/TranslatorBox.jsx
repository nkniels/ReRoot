// Small input + button component for entering the English word and submitting.
// Props:
//   value (string), onChange (fn), onSubmit (fn), loading (bool), placeholder (string)
"use client";

import React from "react";

export default function TranslatorBox({
  value,
  onChange,
  onSubmit,
  loading = false,
  placeholder = "Search...",
}) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex gap-3">
      <input
        className="flex-1 px-4 py-2 rounded border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label="English word"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 rounded bg-green-800 text-white hover:bg-green-700 disabled:opacity-60"
      >
        {loading ? "Searching…" : "Translate"}
      </button>
    </form>
  );
}
