
export const notFound = (req, res, next) => {
    res.status(404).json({ error: "Ruta no encontrada" });
};

export const errorHandler = (err, req, res, next) => {


    console.error(err);
    const status = err.status || 500;

    res.status(status).json({ ok: false, error: err.message || 'Algo salió mal en el servidor.' });
}