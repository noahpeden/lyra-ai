'use client';
import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@material-tailwind/react';
import { StoryProvider } from './contexts/StoryContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <StoryProvider>
          <body className={inter.className}>{children}</body>
        </StoryProvider>
      </ThemeProvider>
    </html>
  );
}
