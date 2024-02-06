import express from 'express';
import authAdmin from '../../controllers/admin/admin.auth.controllers.js';

const authAdminRoute = express.Router();

authAdminRoute.post('/authadmin', authAdmin);

export default authAdminRoute;