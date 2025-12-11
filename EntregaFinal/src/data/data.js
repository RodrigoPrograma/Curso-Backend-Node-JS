import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Importante: NO USES dotenv en Vercel dentro de funciones serverless
// Vercel ya inyecta las variables automáticamente.
// ❌ REMOVE: import dotenv from "dotenv";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "mi-primer-proyecto-4a77e",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "101309217565",
    appId: process.env.FIREBASE_APP_ID
};

// Inicializar Firebase correctamente (primero initialize, después Firestore)
const firebaseApp = !getApps().length 
  ? initializeApp(firebaseConfig) 
  : getApps()[0];

const db = getFirestore(firebaseApp);

export { db };
