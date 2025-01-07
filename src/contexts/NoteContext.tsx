'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { getFirebaseFirestore } from '@/lib/firebase/firestore';
import { Note } from '@/types/note';
import { useAuth } from './AuthContext';

interface NoteContextType {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const db = getFirebaseFirestore();

  useEffect(() => {
    if (!user) {
      setNotes([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, 'notes'),
      where('userId', '==', user.uid)
    );

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const noteList: Note[] = [];
        snapshot.forEach((doc) => {
          noteList.push({ id: doc.id, ...doc.data() } as Note);
        });
        setNotes(noteList);
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user, db]);

  return (
    <NoteContext.Provider value={{ notes, loading, error }}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NoteContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NoteProvider');
  }
  return context;
} 