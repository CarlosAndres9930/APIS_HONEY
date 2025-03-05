import { sedeExists } from "../repositories/sedeRepository.js";

export const validateSede = async (req, res, next) => {
    const { NombreSede } = req.body;
    
    try {
        const exists = await sedeExists(NombreSede);
        if (exists) {
            return res.status(400).json({ message: 'Sede ya existe' });  // Sede exists error
        }
        next();  // Proceed if no issues
    } catch (error) {
        console.error("Error in validateSede: ", error.message);
        return res.status(500).json({ message: 'Error en el Servidor', error: error.message });
    }
};
