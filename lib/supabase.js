// Creates and exports a Supabase client using environment variables.
// Uses NEXT_PUBLIC_* env vars so the client can run in the browser.
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Warning in development console; avoids crashing import in environments where envs are not set.
  console.warn(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Supabase client may not work."
  );
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");
