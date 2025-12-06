import { db } from "../data/data.js";
import { doc, getDoc, collection, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export async function getAllProducts() {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getProductById(id) {
    const ref = doc(db, "products", id);
    const snap = await getDoc(ref);
    return (snap.exists())  ? { id: snap.id, ...snap.data() } : null;   
}

export async function addProduct(product) {
    const docRef = await addDoc(productsCollection, product);
    return { id: docRef.id, ...product };
}

export async function updateProduct(id, updatedData) {
    const productDoc = doc(db, "products", id);

    const snapshot = await getDoc(productDoc);

    if (!snapshot.exists()) {
        const err = new Error("Producto no encontrado");
        err.status = 404;
        throw err;
    }

    await updateDoc(productDoc, updatedData);

    const updatedSnap = await getDoc(productDoc);
    return { id: updatedSnap.id, ...updatedSnap.data() };
}

export async function deleteProduct(id) {
    const productDoc = doc(db, "products", id);

    const snapshot = await getDoc(productDoc);
    if (!snapshot.exists()) {
        const err = new Error("Producto no encontrado");
        err.status = 404;
        throw err;
    }

    await deleteDoc(productDoc);
    return { message: "Producto eliminado correctamente", id: id };
}