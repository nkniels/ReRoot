// Home page with translator UI.
// Handles input, language selection, queries Supabase, and renders results.
"use client";

import { useState } from "react";
import TranslatorBox from "../components/TranslatorBox.jsx";
import LanguageToggle from "../components/LanguageToggle.jsx";
import ResultCard from "../components/ResultCard.jsx";
import { supabase } from "../lib/supabase.js";

export default function Page() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("ngombale");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    if (e && e.preventDefault) e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      setResults([]);
      setSearched(true);
      return;
    }

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const { data, error: sbError } = await supabase
        .from("words")
        .select("*")
        .eq("language", language)
        .ilike("english", `%${trimmed}%`);

      if (sbError) {
        console.error("Supabase query error:", sbError);
        setError("An error occurred while fetching results.");
        setResults([]);
      } else {
        setResults(data || []);
      }
    } catch (err) {
      console.error("Unexpected error during search:", err);
      setError("An unexpected error occurred.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-green-50 text-green-800 antialiased">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">ReRoot</h1>
          <p className="text-sm text-green-700/80">
            Simple translator — search English words and get translations.
          </p>
        </header>

        <section className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <LanguageToggle value={language} onChange={setLanguage} />
            <span className="text-sm text-green-700/70">Language: {language}</span>
          </div>

          <TranslatorBox
            value={query}
            onChange={(v) => setQuery(v)}
            onSubmit={handleSearch}
            loading={loading}
            placeholder="Type an English word and press Enter or Translate"
          />
        </section>

        <section>
          {loading && (
            <div className="flex items-center gap-2 text-green-800">
              <span className="w-5 h-5 border-4 border-green-300 border-t-green-800 rounded-full animate-spin" />
              <span>Loading…</span>
            </div>
          )}

          {!loading && error && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded">{error}</div>
          )}

          {!loading && searched && results.length === 0 && !error && (
            <div className="mt-4 p-4 bg-white rounded shadow-sm text-green-700">
              No results found
            </div>
          )}

          <div className="mt-4 space-y-3">
            {results.map((row) => (
              <ResultCard key={row.id} item={row} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
