import express from 'express';
import {profi, profii, profiii, profiv, profv} from '../../controllers/profs/profs.del.controllers.js';

const fisrtdelrouter = express.Router();
const secdelrouter = express.Router();
const thirddelrouter = express.Router();
const fourthdelrouter = express.Router();
const fifthdelrouter = express.Router();

fisrtdelrouter.delete('/profi', profi);
secdelrouter.delete('/profii', profii);
thirddelrouter.delete('/profiii', profiii);
fourthdelrouter.delete('/profiv', profiv);
fifthdelrouter.delete('/profv', profv);

export {fisrtdelrouter, secdelrouter, thirddelrouter, fourthdelrouter, fifthdelrouter};