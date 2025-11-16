import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { db, auth } from './src/config/firebase.js';
import ProductRoutes from './src/routes/products.routes.js';
import AuthRoutes from './src/routes/auth.routes.js';
import { notFound, errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(bodyParser.json());

app.use('/api/products', ProductRoutes);
app.use('/api/auth', AuthRoutes);

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get("/test-error", (req, res, next) => {
    const error = new Error("Error controlado 🔥");
    error.status = 400;
    next(error);
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El server esta corriendo en el puerto ${PORT}`);
});