import express from 'express'
import {compi, compii, compiii} from '../../controllers/compt/comp.post.controllers.js';

const firstCompPostRouter = express.Router();
const secCompPostRouter = express.Router();
const thirdCompPostRouter = express.Router();

firstCompPostRouter.post('/compi', compi);
secCompPostRouter.post('/compii', compii);
thirdCompPostRouter.post('/compiii', compiii);

export {firstCompPostRouter, secCompPostRouter, thirdCompPostRouter};