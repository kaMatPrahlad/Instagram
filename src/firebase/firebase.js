// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSFxe544o87EAOxOLo0cQT24QyMgW9JQc",
  authDomain: "insta-clone-756af.firebaseapp.com",
  projectId: "insta-clone-756af",
  storageBucket: "insta-clone-756af.appspot.com",
  messagingSenderId: "820026503310",
  appId: "1:820026503310:web:422147c182fc65c494d9df",
  measurementId: "G-F64DVQQEB9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };




// cloud firestore example
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//   match /users/{userId}{
//   allow read;
//   allow write: if request.auth != null && request.auth.uid == userId;
//   }
//   match/posts/{postId}{
//  allow read;
//  allow create: if request.auth != null;
//  allow update: if request.auth != null && request.auth.uid == resource.data.createdBY;
//  allow delete: if request.auth != null && request.auth.uid == resource.data.createdBY;
// }

//   }
// }