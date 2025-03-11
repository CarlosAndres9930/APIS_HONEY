import express from 'express';
import { createCategoryController, getAllCategoriesController, updateCategoryController, deleteCategoryController } from '../controllers/categoryController.js'; 


const router = express.Router();

router.get('/', getAllCategoriesController); 
router.put('/:id', updateCategoryController); 
router.delete('/:id', deleteCategoryController); 
router.post('/', createCategoryController); 

export default router;
