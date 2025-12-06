export function validateProduct(req, res, next) {
    
    const allowFields = ['nombre', 'precio', 'index', 'categoria'];
    
    const receivedFields = Object.keys(req.body).every(field => 
        allowFields.includes(field)
    );

    if (!receivedFields) {
        return res.status(400).json({ error: "Se han recibido campos no permitidos." });
    }
    next();
}