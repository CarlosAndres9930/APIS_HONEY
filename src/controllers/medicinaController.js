import * as medicinaService from '../services/medicinaService.js';
import { validateMedicina } from '../middlewares/validationMedicina.js';

export const getMedicinas = async (req, res) => {
    console.log("Fetching medicinas..."); // Log the fetching process
    try {
        const medicinas = await medicinaService.getMedicinas();
        res.json(medicinas); // Send the retrieved medicinas as a response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addMedicina = [validateMedicina, async (req, res) => {
    try {
        const newMedicina = await medicinaService.addMedicina(req.body);
        res.status(201).json(newMedicina);
    } catch (error) {
        res.status(400).json({ message: 'Error al añadir medicina', error: error.message });
    }
}];

export const updateMedicina = [validateMedicina, async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMedicina = await medicinaService.updateMedicina(id, req.body);
        if (!updatedMedicina) {
            return res.status(404).json({ message: 'Medicina no encontrada' });
        }
        res.json(updatedMedicina);
    } catch (error) {
        res.status(400).json({ message: 'Error al editar la medicina', error: error.message });
    }
}];

export const deleteMedicina = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMedicina = await medicinaService.deleteMedicina(id);
        if (!deletedMedicina) {
            return res.status(404).json({ message: 'Medicina no encontrada' });
        }
        res.json({ message: 'Medicina eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la medicina', error: error.message });
    }
};
