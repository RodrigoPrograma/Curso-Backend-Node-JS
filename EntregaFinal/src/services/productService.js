import { getAllProducts, addProduct, updateProduct, deleteProduct, getProductById } from "../models/productModel.js";

export async function getAllProductsService() {
    try {
        const products = await getAllProducts();
        if(!products){
            const error = new Error("No hay productos disponibles");
            error.status = 404;
            throw error; 
    }
    return products;
}
    catch (error) {
        throw new Error("Error trayendo productos: " + error.message);
    }
};

export async function getProductByIdService(id) {
    try { 
        const product = await getProductById(id);
        return product;
    } catch (error) {
        throw new Error("Error trayendo producto por ID: " + error.message);
    }
};

export async function addProductService(product) {
    try {
        const newProduct = await addProduct(product)
    
        return newProduct;
    }
    catch (error) {
        throw new Error("Error agregando producto: " + error.message);
    }
};

export async function updateProductService(id, updatedData) {
    try {
        const updatedProduct = await updateProduct(id, updatedData);
        return updatedProduct;
    } catch (error) {
        if (error.status) throw error;
        throw new Error("Error actualizando producto: " + error.message);
    }
};

export async function deleteProductService(id) {
    try {
        await deleteProduct(id);
    } catch (error) {
        throw new Error("Error eliminando producto: " + error.message);
    }
};

