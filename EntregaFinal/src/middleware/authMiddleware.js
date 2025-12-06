import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret_key = process.env.JWT_SECRET;

// Validación de token
export function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token no proporcionado" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Formato de token inválido" });
    }

    try {
        const decoded = jwt.verify(token, secret_key);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: "Token inválido o expirado" });
    }
}

export function verifyRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: "No autenticado" });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: "No tienes permisos para esta acción" });
        }

        next();
    };
}
