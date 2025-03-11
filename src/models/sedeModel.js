import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; // Updated to use the correct sequelize instance

const Sede = sequelize.define('Sede', {
    NombreSede: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'sedes', 
    timestamps: false 
});

export default Sede;
