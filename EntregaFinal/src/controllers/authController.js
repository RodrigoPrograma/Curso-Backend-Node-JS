import { loginService } from "../services/loginService.js";

class AuthController {

    async login(req, res) {

        try {
            const { email, password } = req.body;

            if (!email || !password) {
                const err = new Error("Email y contraseña son requeridos");
                err.status = 400;
                throw err;
            }

            const result = await loginService(email, password);
            
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export default new AuthController();