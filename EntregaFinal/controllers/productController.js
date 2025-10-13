import {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct
} from '../Services/productService.js';
import { mostrarError} from "../Services/utils/errorHandler.js";

export async function handleCommands(args) {
    if (args.length === 0) {
        return mostrarError("Debes ingresar un comando. Ejemplo: GET | POST | DELETE");
    }
    const [command, ...rest] = args;

    try {
        switch (command) {
            case 'GET':
                if (rest.length === 0) {
                    const products = await getAllProducts();
                    console.log(products);
                } else if (rest[0].startsWith('products/')) {
                    const id = rest[0].split("/")[1];
                    const product = await getProductById(id);
                    console.log(product);
                } else {
                    mostrarError("Comando GET inválido. Uso: GET o GET products/<id>");
                }
                break;
            case 'POST':
                if (rest.length !== 3) {
                    mostrarError("Comando POST inválido. Uso: POST products/<id> <name> <price>");
                } else {
                    const [title, price, category] = rest;
                    const newProduct = await createProduct({ title, price, category });
                    console.log("Producto creado:", newProduct);
                }
                break;
            case 'DELETE':
                if (rest.length === 1 && rest[0].startsWith('products/')) {
                    const id = rest[0].split("/")[1];
                    const result = await deleteProduct(id);
                    console.log("Producto eliminado:", result);
                } else {
                    mostrarError("Comando DELETE inválido. Uso: DELETE products/<id>");
                }
                break;
            default:
                mostrarError("Comando inválido. Uso: GET | POST | DELETE");
        }
    } catch (error) {
        mostrarError("Error en el servidor");
    }
}
