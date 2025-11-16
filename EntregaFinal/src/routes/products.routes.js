import { Router } from 'express';

const router = Router();
// Rutas de productos (CRUD)
router.get('/', (req, res) => 
    res.json( { ok: true, msj :'Obtener todos los productos'}));

export default router;
