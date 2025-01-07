import { getFirestore, Firestore } from 'firebase/firestore';
import { initFirebase } from './init';

export function getFirebaseFirestore(): Firestore {
  return getFirestore(initFirebase());
} 