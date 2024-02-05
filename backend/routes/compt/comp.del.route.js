import express from 'express'
import {compi, compii, compiii} from '../../controllers/compt/comp.del.controllers.js';

const firstCompDelRouter = express.Router();
const secCompDelRouter = express.Router();
const thirdCompDelRouter = express.Router();

firstCompDelRouter.delete('/compi', compi);
secCompDelRouter.delete('/compii', compii);
thirdCompDelRouter.delete('/compiii', compiii);

export {firstCompDelRouter, secCompDelRouter, thirdCompDelRouter};