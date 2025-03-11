import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; // Assuming you have a sequelize instance configured

const Medicina = sequelize.define('Medicina', {
    NombreMedicina: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Cantidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Dosis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    HorarioAdministracion: {
        type: DataTypes.STRING,
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
