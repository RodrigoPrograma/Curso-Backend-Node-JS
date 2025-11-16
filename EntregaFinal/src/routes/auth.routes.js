import { Router } from 'express';  
const router = Router();

// Rutas de autenticación (registro, login)
router.get ('/login', (req, res) => 
    res.json( { ok: true, msj :'Ruta de autenticación'}));
export default router;