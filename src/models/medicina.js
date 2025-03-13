import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; // Assuming you have a sequelize instance configured

const Medicina = sequelize.define('Medicina', {
    NombreMedicina: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Cantidad: {
        type: DataTypes.INTEGER, // Changed to INTEGER for numeric values
        allowNull: false
    },
    Dosis: {
        type: DataTypes.INTEGER, // Changed to INTEGER for numeric values
        allowNull: false
    },
    HorarioAdministracion: {
        type: DataTypes.TIME, // Changed to TIME for time values
        allowNull: false
    },

    Estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'medicinas',
    timestamps: false // Disable timestamps if not needed
});

export default Medicina;
