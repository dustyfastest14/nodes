import { getAuth } from 'firebase/auth';
import { initFirebase } from './init';

export function getFirebaseAuth() {
  const app = initFirebase();
  return getAuth(app);
} 