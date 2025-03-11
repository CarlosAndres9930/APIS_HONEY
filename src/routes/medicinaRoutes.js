import express from 'express';
import { addMedicina, getMedicinas, updateMedicina, deleteMedicina } from '../controllers/medicinaController.js';
import { validateMedicina } from '../middlewares/validationMedicina.js';

const router = express.Router();

router.get('/', getMedicinas);
router.post('/',addMedicina);
router.put('/:id', updateMedicina);
router.delete('/:id', deleteMedicina);

export default router;
