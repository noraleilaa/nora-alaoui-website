// app/layout.tsx
'use client';

import { useState, useEffect } from 'react';
import './theme.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 p-2 rounded-full bg-background text-foreground"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        {children}
      </body>
    </html>
  );
}