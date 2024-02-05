import express from 'express';
import addAdmin from "../../controllers/admin/admin.post.controllers.js";

const addAdminRoute = express.Router();

addAdminRoute.post('/addadmin', addAdmin);

export default addAdminRoute;