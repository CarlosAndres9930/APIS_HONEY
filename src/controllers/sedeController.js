import * as sedeService from "../services/sedeService.js";

// Controlador para obtener todas las sedes.
export const getSedes = async (req, res) => {
    try {
    const sedes = await sedeService.listSedes()
    if (!sedes || sedes.length === 0) {
        return res.status(404).json({ message: "No sedes found" });
    }
        res.json(sedes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las sedes" });
    }
};

export const addSede = async (req, res, next) => {
    try {
        // Check if this code works, and if not, log the error here.
        const sede = await sedeService.addSede(req.body);
        res.status(201).json(sede);  // Return newly created Sede
    } catch (error) {
        // Log the error message to see what's causing it
        console.error("Error in addSede: ", error.message);
        next(error);  // Send error to error handling middleware
    }
};


export const getSedeById = async (req, res, next) => {
    try {
        // Buscamos la sede por su ID, extraído de los parámetros de la URL.
        const sede = await sedeService.findSede(req.params.id);
        // Si la sede no existe, respondemos con un código 404 (no encontrado).
        if (!sede) return res.status(404).json({ message: "Sede no encontrada" });
        // Si la sede existe, la enviamos en la respuesta.
        res.json(sede);
    } catch (error) {
        // En caso de error, enviamos un código 500.
        next(error);
    }

};

export const updateSede = async (req, res, next) => {
    try {
        // Llamamos al servicio para modificar la sede con el ID y los nuevos datos.
        const sede = await sedeService.modifySede(req.params.id, req.body);
        // Si la sede no existe, enviamos un código 404.
        if (!sede) return res.status(404).json({ message: "Sede no encontrada" });
        // Respondemos con la sede actualizada.
        res.json(sede);
    } catch (error) {
        // En caso de error, enviamos un código 400.
        next(error);
    }

};

export const deleteSede = async (req, res, next) => {
    try {
        // Llamamos al servicio para eliminar la sede con el ID proporcionado.
        const sede = await sedeService.removeSede(req.params.id);
        // Si la sede no existe, enviamos un código 404.
        if (!sede) return res.status(404).json({ message: "Sede no encontrada" });
        // Si se eliminó correctamente, enviamos un mensaje de éxito.
        res.json({ message: "Sede eliminada" });
    } catch (error) {
        // En caso de error, enviamos un código 500.
        next(error);
    }

};
