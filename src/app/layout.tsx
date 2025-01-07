import React from 'react';
import ClientLayout from '@/components/ClientLayout';
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
        <div id="app">
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
} 