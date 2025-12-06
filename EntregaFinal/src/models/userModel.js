import { db } from "../data/data.js";
import { collection, query, where, getDocs } from "firebase/firestore";

const usersCollection = collection(db, "users");

export async function findUserByEmail(email) {
    try {
    const q = query(usersCollection, where("email", "==", email));
    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    // Solo esperamos 1 usuario por email
    const doc = snapshot.docs[0];

    return { id: doc.id, ...doc.data() }
    } catch (error) {
        const err = new Error("Error al buscar usuario: " + error.message);
        err.status = 500;
        throw err;
    }
}