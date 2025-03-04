import Specimen from '../models/specimen.js';

// Create a new specimen
export const createSpecimen = async (data) => {
    try {
        const specimen = await Specimen.create(data);
        return specimen;
    } catch (error) {
        throw error;
    }
};

// Get all specimens
export const getAllSpecimens = async () => {
    try {
        const specimens = await Specimen.findAll();
        return specimens;
    } catch (error) {
        throw error;
    }
};

// Get a specimen by ID
export const getSpecimenById = async (id) => {
    try {
        const specimen = await Specimen.findByPk(id);
        return specimen;
    } catch (error) {
        throw error;
    }
};

// Update a specimen by ID
export const updateSpecimen = async (id, data) => {
    try {
        const specimen = await Specimen.findByPk(id);
        if (specimen) {
            await specimen.update(data);
            return specimen;
        }
        return null;
    } catch (error) {
        throw error;
    }
};

// Delete a specimen by ID
export const deleteSpecimen = async (id) => {
    try {
        const specimen = await Specimen.findByPk(id);
        if (specimen) {
            await specimen.destroy();
            return true;
        }
        return false;
    } catch (error) {
        throw error;
    }
};
