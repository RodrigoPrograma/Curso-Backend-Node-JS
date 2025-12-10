import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRoutes from './routes/products.routes.js';
import AuthRoutes from './routes/auth.routes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: '*'
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


export default app;
