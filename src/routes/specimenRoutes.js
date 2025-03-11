import express from 'express';
import {createSpecimenController,getAllSpecimensController, getSpecimenByIdController,updateSpecimenController, deleteSpecimenController}from '../controllers/specimenController.js'; 

import { validateSpecimen, handleValidationErrors } from '../middlewares/validateSpecimen.js'; 

const router = express.Router();

router.post('/', validateSpecimen, createSpecimenController);

router.get('/', getAllSpecimensController); 
router.get('/:id', getSpecimenByIdController); 
router.put('/:id', validateSpecimen, handleValidationErrors, updateSpecimenController); 

router.delete('/:id', deleteSpecimenController); 

export default router;
