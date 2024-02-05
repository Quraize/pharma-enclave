import express from 'express'
import {foriegni, foriegnii, foriegniii} from '../../controllers/foriegn/foriegn.post.controllers.js';

const firstForiegnPostRouter = express.Router();
const secForiegnPostRouter = express.Router();
const thirdForiegnPostRouter = express.Router();

firstForiegnPostRouter.post('/foriegni', foriegni);
secForiegnPostRouter.post('/foriegnii', foriegnii);
thirdForiegnPostRouter.post('/foriegniii', foriegniii);

export {firstForiegnPostRouter, secForiegnPostRouter, thirdForiegnPostRouter};