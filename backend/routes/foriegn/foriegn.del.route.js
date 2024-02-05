import express from 'express'
import  { foriegni, foriegnii, foriegniii} from '../../controllers/foriegn/foriegn.del.controllers.js';



const firstForiegnDelRouter = express.Router();
const secForiegnDelRouter = express.Router();
const thirdForiegnDelRouter = express.Router();

firstForiegnDelRouter.delete('/foriegni', foriegni);
secForiegnDelRouter.delete('/foriegnii', foriegnii);
thirdForiegnDelRouter.delete('/foriegnii', foriegniii);

export {firstForiegnDelRouter, secForiegnDelRouter, thirdForiegnDelRouter};