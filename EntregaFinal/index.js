import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRoutes from './src/routes/product.routes.js';
import AuthRoutes from './src/routes/auth.routes.js';
import { notFound, errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'https://midominio.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400,
    optionsSuccessStatus: 204
}));

app.use(express.json());

app.use('/api/products', ProductRoutes);
app.use('/api/auth', AuthRoutes);

app.get("/test-error", (req, res, next) => {
    const error = new Error("Error controlado");
    error.status = 400;
    next(error);
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});