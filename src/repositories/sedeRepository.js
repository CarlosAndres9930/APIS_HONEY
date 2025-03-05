import Sede from "../models/sedeModel.js";

export const getAllSedes = async () => await Sede.find();
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

export const deleteSede = async (id) => 
    await Sede.findByIdAndDelete(id);
