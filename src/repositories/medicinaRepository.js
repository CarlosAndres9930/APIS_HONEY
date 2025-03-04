import Medicina from '../models/medicina.js';

export const getAllMedicinas = async () => {
    return await Medicina.findAll();
};

export const createMedicina = async (medicinaData) => {
    return await Medicina.create(medicinaData);
};

export const findMedicinaById = async (medicinaId) => {
    return await Medicina.findByPk(medicinaId);
};

export const updateMedicina = async (medicinaId, updatedData) => {
    await Medicina.update(updatedData, {
        where: { id: medicinaId }
    });
    return await findMedicinaById(medicinaId);
};

export const deleteMedicina = async (medicinaId) => {
    return await Medicina.destroy({
        where: { id: medicinaId }
    });
};
