import express from 'express';
import { addAdmin } from '../controllers/addAdmin.controller.js';

const router = express.Router();

router.post('/addadmin', addAdmin);

export default router;