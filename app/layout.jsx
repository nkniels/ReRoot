// Root layout for the app. Loads global styles and sets basic metadata.
import "./globals.css";

export const metadata = {
  title: "ReRoot",
  description: "A small translation app using Supabase and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-50 text-green-800 antialiased">{children}</body>
    </html>
  );
}
