import express from 'express';
import { compi, compii, compiii} from '../../controllers/compt/comp.get.controllers.js';

const firstCompGetRouter = express.Router();
const secCompGetRouter = express.Router();
const thirdCompGetRouter = express.Router();

firstCompGetRouter.get('/compi', compi);
secCompGetRouter.get('/compii', compii);
thirdCompGetRouter.get('/compiii', compiii);

export {firstCompGetRouter, secCompGetRouter, thirdCompGetRouter};