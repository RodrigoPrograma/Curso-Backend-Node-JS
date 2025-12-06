import { generateToken } from "../data/token.js";
import { findUserByEmail } from "../models/userModel.js";

export async function loginService(email, pass) {
    const user = await findUserByEmail(email);

    if (!user) {
        const err = new Error("Usuario no encontrado");
        err.status = 404;
        throw err;
    }

    if (user.password !== pass) {
        const err = new Error("Contraseña incorrecta");
        err.status = 401;
        throw err;
    }

    const token = generateToken(
        { id: user.id, email: user.email, role: user.role || "user" }
    );

    return { 
        message: "Login exitoso",
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role || "user"
        }};
}