import * as medicinaRepo from '../repositories/medicinaRepository.js';

export const getMedicinas = async () => {

    return await medicinaRepo.getAllMedicinas();
};

export const addMedicina = async (medicinaData) => {
    return await medicinaRepo.createMedicina(medicinaData);
};

export const updateMedicina = async (medicinaId, updatedData) => {
    return await medicinaRepo.updateMedicina(medicinaId, updatedData);
};

export const deleteMedicina = async (medicinaId) => {
    return await medicinaRepo.deleteMedicina(medicinaId);
};

export const getMedicinaById = async (medicinaId) => {
    return await medicinaRepo.findMedicinaById(medicinaId);
};
