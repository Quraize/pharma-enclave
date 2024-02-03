import express from 'express';
import {profi, profii, profiii, profiv, profv} from '../../controllers/profs/profs.get.controllers.js';

const fisrtgetrouter = express.Router();
const secgetrouter = express.Router();
const thirdgetrouter = express.Router();
const fourthgetrouter = express.Router();
const fifthgetrouter = express.Router();

fisrtgetrouter.get('/profi', profi);
secgetrouter.get('/profii', profii);
thirdgetrouter.get('/profiii', profiii);
fourthgetrouter.get('/profiv', profiv);
fifthgetrouter.get('/profv', profv);

export {fisrtgetrouter, secgetrouter, thirdgetrouter, fourthgetrouter, fifthgetrouter};