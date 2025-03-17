import { body, validationResult } from 'express-validator';

export const validateMedicina = [
    body('NombreMedicina')
        .notEmpty().withMessage('NombreMedicina no puede quedar en blanco')
        .matches(/^[^\d].*/).withMessage('NombreMedicina no puede empezar con un número.'),
    body('Cantidad').isNumeric().withMessage('La cantidad tiene que ser un número.'),
    body('Dosis').isNumeric().withMessage('La dosis tiene que ser un número.'),
    body('HorarioAdministracion').isString().matches(/^([01]\d|2[0-3]):([0-5]\d)$/).withMessage('HorarioAdministracion debe estar en formato HH:mm (24 horas).'),
    (req, res, next) => {
        console.log("Incoming request data:", req.body); // Log incoming request data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
