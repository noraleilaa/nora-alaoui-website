// app/layout.tsx
import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Nora Alaoui | Machine Learning Engineer",
  description: "Portfolio of Nora Alaoui, AI Specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <style>{`
          :root {
            --background: #fafafa;
            --foreground: #0a0a0a;
            --color-background: var(--background);
            --color-foreground: var(--foreground);
            --font-sans: ${GeistSans.style.fontFamily};
            --font-mono: ${GeistMono.style.fontFamily};
          }
          
          .dark {
            --background: #0a0a0a;
            --foreground: #fafafa;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}