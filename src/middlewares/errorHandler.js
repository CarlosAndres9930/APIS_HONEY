export const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Error en el Servidor", error: err.message });
};
