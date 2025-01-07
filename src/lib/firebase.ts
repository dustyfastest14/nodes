import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDh6jOnzWmqjgsi0Y65cK9daYoA5HUztyA",
  authDomain: "nodes-6ca6a.firebaseapp.com",
  projectId: "nodes-6ca6a",
  storageBucket: "nodes-6ca6a.firebasestorage.app",
  messagingSenderId: "273583899694",
  appId: "1:273583899694:web:9978248a315a8d27eacbbf",
  measurementId: "G-Z2H7D0D492"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 