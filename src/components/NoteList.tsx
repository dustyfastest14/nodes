'use client';
import React from 'react';
import { useNotes } from '@/contexts/NoteContext';

export default function NoteList() {
  const { notes, deleteNote } = useNotes();

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <div 
          key={note.id} 
          className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold">{note.title}</h3>
          <p className="text-gray-600 mt-2 whitespace-pre-wrap">{note.content}</p>
          <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
            <span>更新于: {new Date(note.updatedAt).toLocaleString()}</span>
            <button
              onClick={() => deleteNote(note.id)}
              className="text-red-500 hover:text-red-700"
            >
              删除
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 