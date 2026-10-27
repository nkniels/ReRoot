## 2024-03-24 - Do not leak DB schema details
**Vulnerability:** Supabase queries executed directly on the client ('use client' components in Next.js) can throw errors containing sensitive schema information. Previously, these errors were placed directly into component state and rendered to the end user.
**Learning:** In a typical backend environment, error messages are hidden from users. But because Next.js client components execute on the user's browser, passing error objects straight to the UI exposes the underlying database schema and table details.
**Prevention:** Always log specific database errors with console.error/logger and display a generic "An error occurred" message to the end user instead.
