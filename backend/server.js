import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import addAdminRouter from './routes/admin.rout.js';
import {fisrtpostrouter, secpostrouter, thirdpostrouter, fourtposthrouter, fifthpostrouter} from './routes/profs/profs.post.route.js';
import {fisrtgetrouter, secgetrouter, thirdgetrouter, fourthgetrouter, fifthgetrouter} from './routes/profs/profs.get.route.js';
import {fisrtdelrouter, secdelrouter, thirddelrouter, fourthdelrouter, fifthdelrouter} from './routes/profs/profs.del.route.js';
import {fisrtupdaterouter, secupdaterouter, thirdupdaterouter, fourthupdaterouter, fifthupdaterouter} from './routes/profs/profs.update.route.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
dotenv.config();
connectDB();

//to allow to get json from user/admin end
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/admin', addAdminRouter);

//to post the data about the subject in the db
app.use('/addsubject', fisrtpostrouter);
app.use('/addsubject', secpostrouter);
app.use('/addsubject', thirdpostrouter);
app.use('/addsubject', fourtposthrouter);
app.use('/addsubject', fifthpostrouter);

//to get the data about the subjects from the db
app.use('/showsubject', fisrtgetrouter);
app.use('/showsubject', secgetrouter);
app.use('/showsubject', thirdgetrouter);
app.use('/showsubject', fourthgetrouter);
app.use('/showsubject', fifthgetrouter);

//to delete the data about the subjects from the db
app.use('/deletesubject', fisrtdelrouter);
app.use('/deletesubject', secdelrouter);
app.use('/deletesubject', thirddelrouter);
app.use('/deletesubject', fourthdelrouter);
app.use('/deletesubject', fifthdelrouter);

//to delete the data about the subjects from the db
app.use('/updatesubject', fisrtupdaterouter);
app.use('/updatesubject', secupdaterouter);
app.use('/updatesubject', thirdupdaterouter);
app.use('/updatesubject', fourthupdaterouter);
app.use('/updatesubject', fifthupdaterouter);


app.listen(port, ()=>{
    console.log(`Server is listening on the port ${port}`);
})