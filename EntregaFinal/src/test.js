import { getAllProducts, getProductById } from "./models/productModel.js";

async function runTests() {
    console.log("🔍 Probando getAllProducts()...");
    const all = await getAllProducts();
    console.log("Resultado:", all);

    console.log("\n🔍 Probando getProductById('1')...");
    const product = await getProductById("item1");
    console.log("Resultado:", product);
}

runTests();