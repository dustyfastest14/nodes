import { getAuth, Auth } from 'firebase/auth';
import { initFirebase } from './init';

export function getFirebaseAuth(): Auth {
  return getAuth(initFirebase());
} 