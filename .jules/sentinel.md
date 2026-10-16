## 2024-10-16 - Prevent Database Schema Leakage via Supabase Errors
**Vulnerability:** Client-side Supabase queries exposed raw database error messages (`sbError.message`) directly to the user interface on query failure.
**Learning:** Returning unhandled or raw backend errors in frontend components can leak sensitive database schema information, table structures, and query constraints directly to potentially malicious actors.
**Prevention:** Always log raw database/backend errors securely using `console.error` (or a dedicated logging service) and display only safe, generic fallback error messages to the end user.
