## 2026-10-29 - Prevent Database Schema Leakage in Error Messages
**Vulnerability:** Raw error messages from Supabase queries were directly set to state and rendered in the frontend UI (`sbError.message` and `err.message`), potentially leaking internal database schema structure or internal configurations.
**Learning:** Due to the app architecture where queries to Supabase are executed directly from the frontend ('use client'), there's an increased risk of unintentionally exposing backend internals directly to users when failures occur.
**Prevention:** Always catch and log raw errors securely (e.g. `console.error` during development, or a secure logging service in production), and only ever surface generic, non-specific error messages to the user interface (e.g., "An error occurred").
