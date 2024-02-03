import { profi, profii, profiii, profiv, profv } from "../../controllers/profs/profs.post.controllers.js";
import express from 'express';

const fisrtpostrouter = express.Router();
const secpostrouter = express.Router();
const thirdpostrouter = express.Router();
const fourtposthrouter = express.Router();
const fifthpostrouter = express.Router();

fisrtpostrouter.post('/profi', profi);
secpostrouter.post('/profii', profii);
thirdpostrouter.post('/profiii', profiii);
fourtposthrouter.post('/profiv', profiv);
fifthpostrouter.post('/profv', profv);

export {fisrtpostrouter, secpostrouter, thirdpostrouter, fourtposthrouter, fifthpostrouter};