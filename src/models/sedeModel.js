import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; // Updated to use the correct sequelize instance

const Sede = sequelize.define('Sede', {
    NombreSede: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'sedes', // Specify the table name if it differs from the model name
    timestamps: false // Disable timestamps if not needed
});

export default Sede;
