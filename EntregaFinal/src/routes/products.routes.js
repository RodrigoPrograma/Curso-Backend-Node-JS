import express from "express";
import {
    getAllProductsController,
    getProductByIdController,
    addProductController,
    updateProductController,
    deleteProductController
} from "../controllers/productController.js";
import { verifyToken, verifyRole } from "../middleware/authMiddleware.js";
import { validateProduct } from "../middleware/validator.js";
import { validateProduct as validateUpdateProduct } from "../middleware/updateValidator.js";
import { Admin } from "mongodb";

const router = express.Router();

router.get("/", verifyToken, getAllProductsController);

router.get("/:id", verifyToken, getProductByIdController);

router.post("/", validateProduct, verifyToken, verifyRole ("admin"), addProductController);

router.put("/:id", validateUpdateProduct, verifyToken, verifyRole ("admin"), updateProductController);

router.delete("/:id", verifyToken, verifyRole ("admin"), deleteProductController);
export default router;
