'use client';
import React from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { NoteProvider } from '@/contexts/NoteContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <NoteProvider>
        {children}
      </NoteProvider>
    </AuthProvider>
  );
} 