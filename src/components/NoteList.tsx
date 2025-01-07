import React from 'react';
import { useNotes } from '@/contexts/NoteContext';
import Link from 'next/link';

export default function NoteList() {
  const { notes, loading, error } = useNotes();

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <Link 
          key={note.id} 
          href={`/notes/${note.id}`}
          className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold">{note.title}</h3>
          <p className="text-gray-600 truncate">{note.content}</p>
          <div className="text-sm text-gray-500 mt-2">
            更新于: {note.updatedAt.toLocaleString()}
          </div>
        </Link>
      ))}
    </div>
  );
} 