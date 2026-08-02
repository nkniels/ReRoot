# ReRoot — Simple Next.js Translation App

This project is a minimal translation UI built with Next.js 14 (App Router), Tailwind CSS, and Supabase JS.

It includes:
- A home page with a translator UI (search English words)
- A Supabase-based backend query (table: `words`)
- Minimal Tailwind styling (green palette)

Required Supabase table schema (example):
- Table name: `words`
- Columns: id, english, translation, language, category, source, confidence, audio_url

Setup (for beginners):

1. Install Node.js (v18+ recommended).

2. Create a new project folder and add these files (or clone if this repo exists).

3. Create a `.env.local` file in the project root and fill in the values from `.env.local.example`:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY

4. Install dependencies:
   npm init -y
   npm install next react react-dom tailwindcss postcss autoprefixer @supabase/supabase-js

5. Initialize Tailwind (if you want the full toolchain and config):
   npx tailwindcss init -p
   - Ensure your `tailwind.config.js` content paths include `./app/**/*.{js,jsx}` and `./components/**/*.{js,jsx}`

6. Add scripts to your `package.json`:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

7. Run the dev server:
   npm run dev

8. Open http://localhost:3000 and try searching for an English word.

Notes:
- This scaffold uses plain JavaScript (no TypeScript).
- Styling uses only Tailwind utility classes; no external UI libraries.
- The Supabase client expects `NEXT_PUBLIC_` env vars so it can be used in the browser.
- The SQL used by the app is:
  SELECT * FROM words WHERE language = ? AND english ILIKE %input%
- If you get CORS/auth errors, double-check your Supabase anon key and project settings.

Happy hacking — feel free to ask if you want additional features (pagination, fuzzy search, favorites, or server-side rendering).
