import express from 'express';
import * as medicinaController from '../controllers/medicinaController.js';
import { validateMedicina } from '../middlewares/validationMedicina.js';

const router = express.Router();

router.post('/', validateMedicina, medicinaController.addMedicina);
router.get('/', medicinaController.getMedicinas);
router.put('/:id', medicinaController.updateMedicina);
router.delete('/:id', medicinaController.deleteMedicina);

export default router;
