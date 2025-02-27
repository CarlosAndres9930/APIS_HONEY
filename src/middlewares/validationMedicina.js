import { body, validationResult } from 'express-validator';

export const validateMedicina = [
    body('NombreMedicina').notEmpty().withMessage('NombreMedicina no puede quedar en blanco'),
    body('Cantidad').isNumeric().withMessage('La cantidad tiene  que ser un número.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
