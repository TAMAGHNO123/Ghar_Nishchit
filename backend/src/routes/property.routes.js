import { Router } from 'express';
import {
  createProperty,

  getAllProperties,

  getPropertyById,

  updateProperty,

  deleteProperty
} 

from '../controllers/property.controller.js';

const router = Router();

// CRUD routes
router.post('/', createProperty);
router.get('/', getAllProperties);
router.get('/:id', getPropertyById);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);

export default router;
