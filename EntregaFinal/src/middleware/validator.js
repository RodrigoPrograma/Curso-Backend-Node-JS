export function validateProduct(req, res, next) {
    let { nombre, precio, index, categoria } = req.body;

    precio = Number(precio);
    index = Number(index);

    if (!nombre || typeof nombre !== 'string' ) {
        return res.status(400).json({ error: "El campo 'nombre' es obligatorio y debe ser una cadena de texto." });
    }

    if ( isNaN(precio) || precio < 0) {
        return res.status(400).json({ error: "El campo 'precio' es obligatorio y debe ser un número positivo." });
    }

    if ( isNaN(index) || index < 0) {
        return res.status(400).json({ error: "El campo 'index' es obligatorio y debe ser un número positivo." });
    }

    if (!categoria || typeof categoria !== 'string' ) {
        return res.status(400).json({ error: "El campo 'categoria' es obligatorio y debe ser una cadena de texto." });
    }

    req.body.precio = precio;
    req.body.index = index;
    req.body.categoria = categoria;
    req.body.nombre = nombre;

    next();

}


