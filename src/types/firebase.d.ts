declare module 'firebase/app' {
  import { FirebaseApp } from '@firebase/app';
  export * from '@firebase/app';
  export { FirebaseApp };
}

declare module 'firebase/auth' {
  import { Auth } from '@firebase/auth';
  export * from '@firebase/auth';
  export { Auth };
}

declare module 'firebase/firestore' {
  import { Firestore } from '@firebase/firestore';
  export * from '@firebase/firestore';
  export { Firestore };
} 