## 2024-03-24 - Information Disclosure via Supabase Error Messages
**Vulnerability:** Raw error messages from Supabase queries were passed directly to `setError` and displayed to users on the frontend.
**Learning:** Because the app queries Supabase directly from frontend ('use client') Next.js components, database schema details and underlying query errors can leak if not masked.
**Prevention:** Catch errors client-side, log the raw error securely to `console.error` (for debugging only, or a real logging service), and display a generic, sanitized error message to the user.
