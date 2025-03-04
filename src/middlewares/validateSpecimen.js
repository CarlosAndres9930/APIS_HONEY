import { body, validationResult } from 'express-validator';

// Validation rules for Specimen
export const validateSpecimen = [
    body('name').notEmpty().withMessage('The name is required'),
    body('birthDate').isDate().withMessage('The birth date is required'),
    body('paso').notEmpty().withMessage('The paso is required'),
    body('color').notEmpty().withMessage('The color is required'),
    body('owner').notEmpty().withMessage('The owner is required'),
    body('cedula')
        .notEmpty()
        .withMessage('The cedula is required')
        .isLength({ min: 10, max: 10 })
        .withMessage('Min 10 characters'),
    body('email').notEmpty().withMessage('The email is required'),
];

// Middleware to handle validation results
export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
