import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

// Define the Specimen model
const Specimen = sequelize.define('Specimen', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: 'The birth date is required' },
        },
    },
    paso: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    cedula: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'The cedula is required' },
            len: {
                args: [10, 10],
                msg: 'Min 10 characters',
            },
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    tableName: 'specimens',
    timestamps: false,
});

// Virtual method to calculate age in months
Specimen.prototype.ageInMonths = function () {
    const today = new Date();
    const birthDate = new Date(this.birthDate);
    let ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12;
    ageInMonths += today.getMonth() - birthDate.getMonth();
    if (today.getDate() < birthDate.getDate()) {
        ageInMonths--;
    }
    return ageInMonths;
};

export default Specimen;
