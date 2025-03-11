import express from 'express';
import { validateSede } from "../middlewares/validateSedes.js";
import {
    getSedes,
    addSede,
    getSedeById,
    updateSede,
    deleteSede
} from "../controllers/sedeController.js"; 

const router = express.Router();

router.get('/', getSedes);
router.post('/', validateSede, addSede);
router.get('/:id', getSedeById);
router.put('/:id', updateSede);
router.delete('/:id', deleteSede);

export default router;
