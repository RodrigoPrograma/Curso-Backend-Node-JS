import { handleCommands } from "./controllers/productController.js";

const argumentos = process.argv.slice(2);
handleCommands(argumentos);