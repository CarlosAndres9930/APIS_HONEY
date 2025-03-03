import {
    createSpecimen,
    getAllSpecimens,
    getSpecimenById,
    updateSpecimen,
    deleteSpecimen
} from '../services/specimenService.js';

// Create a new specimen
export const createSpecimenController = async (req, res) => {
    try {
        const specimen = await createSpecimen(req.body);
        res.status(201).json(specimen);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all specimens
export const getAllSpecimensController = async (req, res) => {
    try {
        const specimens = await getAllSpecimens();
        res.status(200).json(specimens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specimen by ID
export const getSpecimenByIdController = async (req, res) => {
    try {
        const specimen = await getSpecimenById(req.params.id);
        if (specimen) {
            res.status(200).json(specimen);
        } else {
            res.status(404).json({ error: 'Specimen not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a specimen by ID
export const updateSpecimenController = async (req, res) => {
    try {
        const specimen = await updateSpecimen(req.params.id, req.body);
        if (specimen) {
            res.status(200).json(specimen);
        } else {
            res.status(404).json({ error: 'Specimen not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a specimen by ID
export const deleteSpecimenController = async (req, res) => {
    try {
        const success = await deleteSpecimen(req.params.id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Specimen not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
