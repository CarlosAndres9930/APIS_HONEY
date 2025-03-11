import Sede from "../models/sedeModel.js";

export const getAllSedes = async () => {
    try {
        const sedes = await Sede.findAll();
        console.log("Fetched sedes:", sedes); // Log the fetched sedes
        return sedes;
    } catch (error) {
        console.error("Error fetching sedes:", error.message); // Log any errors
        throw error; // Rethrow the error for further handling
    }
};

export const getSedeById = async (id) => await Sede.findById(id);
export const sedeExists = async (nombreSede) => {
    console.log("Checking if sede exists:", nombreSede); // Log the name being checked
    return await Sede.findOne({ where: { NombreSede: nombreSede } }); // Added where clause
}

export const createSede = async (sedeData) => {
    const exists = await sedeExists(sedeData.NombreSede);
    if (exists) {
        throw new Error('Sede with this name already exists');
    }

    const sede = new Sede(sedeData);
    return await sede.save();
};
export const updateSede = async (id, sedeData) => 
    await Sede.findByIdAndUpdate(id, sedeData, { new: true });

export const deleteSede = async (id) => {
    const sede = await Sede.findByPk(id); // Find the sede by primary key
    if (sede) {
        await sede.destroy(); // Delete the sede
        return true; // Return true if deletion was successful
    }
    return false; // Return false if the sede was not found
};
