import { getFirestore, Firestore } from 'firebase/firestore';
import { initFirebase } from './init';

let firestore: Firestore | undefined;

export function getFirebaseFirestore(): Firestore {
  if (!firestore) {
    firestore = getFirestore(initFirebase());
  }
  return firestore;
} 