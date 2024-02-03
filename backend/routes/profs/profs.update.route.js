import  {profi, profii, profiii, profiv, profv} from '../../controllers/profs/profs.del.controllers.js';
import express from 'express';

const fisrtupdaterouter = express.Router();
const secupdaterouter = express.Router();
const thirdupdaterouter = express.Router();
const fourthupdaterouter = express.Router();
const fifthupdaterouter = express.Router();

fisrtupdaterouter.put('/profi', profi);
secupdaterouter.put('/profii', profii);
thirdupdaterouter.put('/profiii', profiii);
fourthupdaterouter.put('/profiv', profiv);
fifthupdaterouter.put('/profv', profv);

export {fisrtupdaterouter, secupdaterouter, thirdupdaterouter, fourthupdaterouter, fifthupdaterouter};