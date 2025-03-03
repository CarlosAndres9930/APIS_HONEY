import express from 'express';
import { createCategoryController, getAllCategoriesController, updateCategoryController, deleteCategoryController } from '../controllers/categoryController.js'; 


const router = express.Router();

router.get('/', getAllCategoriesController); 
router.put('/:id', updateCategoryController); // Adding update category route
router.delete('/:id', deleteCategoryController); // Adding delete category route



router.post('/', createCategoryController); 

export default router;
