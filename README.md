# ReRoot — Simple Next.js Translation App

This project is a minimal translation UI built with Next.js 14 (App Router), Tailwind CSS, and Supabase JS.

It includes:
- A home page with a translator UI (search English words)
- A Supabase-based backend query (table: `words`)
- Minimal Tailwind styling (green palette)


Notes:
- This scaffold uses plain JavaScript (no TypeScript).
- Styling uses only Tailwind utility classes; no external UI libraries.
- The Supabase client expects `NEXT_PUBLIC_` env vars so it can be used in the browser.
- The SQL used by the app is:
  SELECT * FROM words WHERE language = ? AND english ILIKE %input%
- If you get CORS/auth errors, double-check your Supabase anon key and project settings.

Happy hacking — feel free to ask if you want additional features (pagination, fuzzy search, favorites, or server-side rendering).
