import dotenv from 'dotenv';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "mi-primer-proyecto-4a77e",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "101309217565",
    appId: process.env.FIREBASE_APP_ID
};
const db = getFirestore(app);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export { db };