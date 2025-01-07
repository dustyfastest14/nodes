'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNotes } from '@/contexts/NoteContext';

export default function AddNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addNote(title.trim(), content.trim());
      setTitle('');
      setContent('');
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="笔记标题"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="笔记内容"
          className="w-full p-2 border rounded h-32"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        添加笔记
      </button>
    </form>
  );
} 