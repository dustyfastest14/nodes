import { getFirestore } from 'firebase/firestore';
import { initFirebase } from './init';

export function getFirebaseFirestore() {
  const app = initFirebase();
  return getFirestore(app);
} 