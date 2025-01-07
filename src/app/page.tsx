'use client';
import React from 'react';
import AddNote from '@/components/AddNote';
import NoteList from '@/components/NoteList';
import PasswordPrompt from '@/components/PasswordPrompt';
import { usePassword } from '@/contexts/PasswordContext';

export default function Home() {
  const { isAuthenticated } = usePassword();

  if (!isAuthenticated) {
    return <PasswordPrompt />;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">我的笔记</h1>
      <AddNote />
      <NoteList />
    </main>
  );
} 