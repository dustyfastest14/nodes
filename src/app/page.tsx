'use client';
import React from 'react';
import NoteList from '@/components/NoteList';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">我的笔记</h1>
      <NoteList />
    </main>
  );
} 