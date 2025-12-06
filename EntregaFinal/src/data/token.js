import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret_key = process.env.JWT_SECRET;

if (!secret_key) {
    throw new Error("Falta la variable JWT_SECRET en el archivo .env");
}

export function generateToken(userData) {
    const payload = {
        id: userData.id,
        email: userData.email,
        role: userData.role // importante para permisos
    };

    return jwt.sign(payload, secret_key, {
        expiresIn: "1h"
    });
}
