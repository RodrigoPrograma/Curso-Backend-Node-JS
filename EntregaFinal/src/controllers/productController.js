import { error } from 'console';
import {
    getAllProductsService,
    getProductByIdService,
    addProductService,
    updateProductService,
    deleteProductService
} from '../services/productService.js';


export async function getAllProductsController(req, res) {
    try {
        const products = await getAllProductsService();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener todos los productos" });
    }
} 

export async function getProductByIdController(req, res) {
    try {
        const {id} = req.params;
        const product = await getProductByIdService(id);
        
        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el producto" });
    }
}

export async function addProductController(req, res) {
    try {
        const productData = req.body;
        const newProduct = await addProductService(productData);
        res.status(201).json({
            message: "Producto creado correctamente con el id " + newProduct.id,
            product: newProduct 
        });
    } catch (error) {
        res.status(500).json({ error: "Error al crear el producto" });
    }
}

export async function updateProductController(req, res) {
    try {
        const { id } = req.params;
        const productData = req.body;

        const updateProduct = await updateProductService(id, productData);
        res.json(updateProduct);
    }
    catch(error){
        res.status(error.status || 500).json ({ error: error.message });
    }
}

export async function deleteProductController(req, res) {
    try {
        const {id} = req.params;
        await deleteProductService(id);
        res.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}