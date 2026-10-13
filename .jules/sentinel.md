## 2026-10-13 - Information Leakage in Error Messages
**Vulnerability:** Supabase and internal JavaScript error messages (`err.message`, `sbError.message`) were being passed directly to the UI's `setError` state, potentially exposing database schema details or internal logic to end users.
**Learning:** This existed because it's convenient during development to see exact error strings, but it violates the principle of failing securely in production.
**Prevention:** Always log detailed error information to the server or browser console (`console.error`), and display generic, user-friendly fallback messages to the client (e.g., "An error occurred").
