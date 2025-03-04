export const validateCategory = (req, res, next) => {
    const { nameCategory } = req.body;
    if (!nameCategory) {
        return res.status(400).json({ msg: nameCategory });
    }
    if (nameCategory.length < 4) {
        return res.status(400).json({ msg: 'The category name must be at least 4 characters long' });
    }
    const nameValidationRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    if (!nameValidationRegex.test(nameCategory)) {
        return res.status(400).json({ msg: 'The name cannot contain numbers or special characters' });
    }
    next();
};

export const validateCategoryDeletion = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ msg: 'Category ID is required for deletion' });
    }
    next();
};
