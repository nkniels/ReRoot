// Displays one word result with English, translation, category, and an audio play button.
// Props: item (object from the "words" table)
"use client";

import React from "react";

export default function ResultCard({ item }) {
  const { english, translation, category, audio_url, source, confidence } = item || {};

  function playAudio() {
    if (!audio_url) return;
    try {
      const a = new Audio(audio_url);
      a.play();
    } catch (err) {
      // ignore play errors in this simple example
      // a real app might surface the error to the user
      console.error("Audio play failed", err);
    }
  }

  return (
    <div className="p-4 bg-white rounded shadow-sm flex items-center justify-between">
      <div>
        <div className="text-lg font-medium">{english}</div>
        <div className="text-sm text-green-800/80">{translation}</div>
        <div className="mt-1 text-xs text-green-700/60">
          {category ? `Category: ${category}` : null}
          {source ? ` • Source: ${source}` : null}
          {confidence ? ` • Confidence: ${confidence}` : null}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {audio_url ? (
          <button
            onClick={playAudio}
            className="px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200"
            aria-label="Play audio"
          >
            ▶
          </button>
        ) : (
          <div className="text-xs text-green-600/70">No audio</div>
        )}
      </div>
    </div>
  );
}
