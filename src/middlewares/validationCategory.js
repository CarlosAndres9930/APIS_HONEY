import { body, validationResult } from 'express-validator';

export const validateCategory = [
    body('categoryName').notEmpty().withMessage('Category name is required.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
