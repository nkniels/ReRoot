## 2026-10-30 - Leaking database details via generic error boundary
**Vulnerability:** The application was catching backend Supabase errors directly on the frontend and exposing `sbError.message` and `err.message` to the UI via `setError()`.
**Learning:** Because the application queries Supabase directly from frontend ('use client') Next.js components rather than going through a dedicated backend API route, any unhandled database errors exposed to the user could inadvertently leak database schema details, constraints, or internal backend architecture.
**Prevention:** Always log detailed error messages strictly to the console or an internal logger, and sanitize error states by presenting generic, user-friendly messages (e.g. "An error occurred") to the frontend UI.
