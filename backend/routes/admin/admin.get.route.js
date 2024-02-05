import express from 'express';
import authAdmin from '../../controllers/admin/admin.get.controllers.js';

const authAdminRoute = express.Router();

authAdminRoute.get('/authadmin', authAdmin);

export default authAdminRoute;