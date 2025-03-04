export const errorHandler = (err, req, res, next) => {
    console.error(err);
    
    if (err.status === 400) {
        return res.status(400).json({ msg: 'Validation Error', errors: err.errors });
    }
    
    res.status(500).json({ msg: 'Internal Server Error', error: err.message });
};
