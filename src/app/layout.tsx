import React from 'react';
import { NoteProvider } from '@/contexts/NoteContext';
import { PasswordProvider } from '@/contexts/PasswordContext';
import './globals.css';

export const metadata = {
  title: '在线笔记',
  description: '一个简单的在线笔记应用',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <PasswordProvider>
          <NoteProvider>
            {children}
          </NoteProvider>
        </PasswordProvider>
      </body>
    </html>
  );
} 