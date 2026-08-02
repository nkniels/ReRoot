// Simple toggle between "ngombale" and "meta" languages.
// Props: value (string) and onChange (fn)
"use client";

import React from "react";

export default function LanguageToggle({ value = "ngombale", onChange }) {
  function setLang(l) {
    if (onChange) onChange(l);
  }

  return (
    <div className="inline-flex rounded-full p-1 bg-white border border-green-100">
      <button
        onClick={() => setLang("ngombale")}
        className={`px-3 py-1 rounded-full text-sm ${
          value === "ngombale" ? "bg-green-800 text-white" : "text-green-800/80"
        }`}
      >
        ngombale
      </button>
      <button
        onClick={() => setLang("meta")}
        className={`px-3 py-1 rounded-full text-sm ${
          value === "meta" ? "bg-green-800 text-white" : "text-green-800/80"
        }`}
      >
        meta
      </button>
    </div>
  );
}
