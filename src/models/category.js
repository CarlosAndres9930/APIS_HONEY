import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; 

const Category = sequelize.define('Category', {
    nameCategory: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [4, 255],
                msg: 'The name must be at least 4 characters long'
            },
            is: {
                args: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
                msg: 'The name cannot contain numbers or special characters'
            }
        }
    }
}, {
    tableName: 'categories',
    timestamps: false 
});

export default Category;
