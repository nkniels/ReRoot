## 2024-05-18 - Fix information exposure in Supabase error handling
**Vulnerability:** Unhandled PostgREST database errors were being directly exposed to the frontend UI via `sbError.message` and `err.message`.
**Learning:** In Next.js client-side components using Supabase, directly passing `error.message` to state variables rendered on screen can inadvertently leak database schema details, table names, or raw stack traces to users. This exposes internal database structure and violates the principle of failing securely.
**Prevention:** Always catch and log raw errors to `console.error` for debugging, but expose only generic, sanitized error messages to the user UI, such as "An error occurred while fetching results. Please try again."
