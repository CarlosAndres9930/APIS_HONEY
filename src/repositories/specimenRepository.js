import db from '../config/db.js'; // Importing the database connection

// Create a new specimen
export const createSpecimen = async (specimenData) => {
    const [result] = await db('specimens').insert(specimenData).returning('*');
    return result;
};

// Get all specimens
export const getAllSpecimens = async () => {
    return await db('specimens').select('*');
};

// Get a specimen by ID
export const getSpecimenById = async (id) => {
    const specimen = await db('specimens').where({ id }).first();
    return specimen;
};

// Update a specimen by ID
export const updateSpecimen = async (id, specimenData) => {
    const [result] = await db('specimens').where({ id }).update(specimenData).returning('*');
    return result;
};

// Delete a specimen by ID
export const deleteSpecimen = async (id) => {
    const result = await db('specimens').where({ id }).del();
    return result > 0; // Return true if a specimen was deleted
};
