import express from 'express'
import { foriegni, foriegnii, foriegniii} from '../../controllers/foriegn/foriegn.get.controllers.js';

const firstForiegnGetRouter = express.Router();
const secForiegnGetRouter = express.Router();
const thirdForiegnGetRouter = express.Router();

firstForiegnGetRouter.get('/foriegni', foriegni);
secForiegnGetRouter.get('/foriegnii', foriegnii);
thirdForiegnGetRouter.get('/foriegniii', foriegniii);

export { firstForiegnGetRouter, secForiegnGetRouter, thirdForiegnGetRouter};