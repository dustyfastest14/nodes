import { getAuth, Auth } from 'firebase/auth';
import { initFirebase } from './init';

let auth: Auth | undefined;

export function getFirebaseAuth(): Auth {
  if (!auth) {
    auth = getAuth(initFirebase());
  }
  return auth;
} 