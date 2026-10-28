## 2024-05-18 - Information Disclosure via Supabase Error Messages
**Vulnerability:** Raw Supabase database error messages (`sbError.message` and `err.message`) were directly passed to the UI state and displayed to the user.
**Learning:** Querying Supabase directly from frontend Next.js components can lead to information disclosure if errors aren't caught and sanitized, leaking database schema or internal structures.
**Prevention:** Always log raw errors to the console or an internal logging service for debugging, and provide generic, safe error messages to the user UI.