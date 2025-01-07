'use client';
import React from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { NoteProvider } from '@/contexts/NoteContext';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <AuthProvider>
          <NoteProvider>
            {children}
          </NoteProvider>
        </AuthProvider>
      </body>
    </html>
  );
} 