import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import connectDB from './config/db.js';
//Auth Admin functionalities imports
import addAdminRoute from './routes/admin/admin.post.route.js';
import authAdminRoute from './routes/admin/admin.get.route.js';
//profs routes imports
import {fisrtpostrouter, secpostrouter, thirdpostrouter, fourtposthrouter, fifthpostrouter} from './routes/profs/profs.post.route.js';
import {fisrtgetrouter, secgetrouter, thirdgetrouter, fourthgetrouter, fifthgetrouter} from './routes/profs/profs.get.route.js';
import {fisrtdelrouter, secdelrouter, thirddelrouter, fourthdelrouter, fifthdelrouter} from './routes/profs/profs.del.route.js';
import {fisrtupdaterouter, secupdaterouter, thirdupdaterouter, fourthupdaterouter, fifthupdaterouter} from './routes/profs/profs.update.route.js';
//foriegn routes imports
import {firstForiegnPostRouter, secForiegnPostRouter, thirdForiegnPostRouter} from './routes/foriegn/foriegn.post.route.js';
import { firstForiegnGetRouter, secForiegnGetRouter, thirdForiegnGetRouter} from './routes/foriegn/foriegn.get.route.js';
import  {firstForiegnDelRouter, secForiegnDelRouter, thirdForiegnDelRouter} from './routes/foriegn/foriegn.del.route.js';
//competitive routes imports
import {firstCompPostRouter, secCompPostRouter, thirdCompPostRouter} from './routes/compt/comp.post.route.js';
import {firstCompGetRouter, secCompGetRouter, thirdCompGetRouter} from './routes/compt/comp.get.route.js';
import {firstCompDelRouter, secCompDelRouter, thirdCompDelRouter} from './routes/compt/comp.del.route.js';
 
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
dotenv.config();
connectDB();

//to allow to get json from user/admin end
app.use(express.json());

app.use('/api/user', userRouter);
{/*Admin-end functionalities  */}
app.use('/admin', addAdminRoute);
app.use('/admin', authAdminRoute);

{/*PROFESSIONAL EXAMS SECTION */}
//to post the data about the subject in the db PROFS
app.use('/addsubject', fisrtpostrouter);
app.use('/addsubject', secpostrouter);
app.use('/addsubject', thirdpostrouter);
app.use('/addsubject', fourtposthrouter);
app.use('/addsubject', fifthpostrouter);

//to get the data about the subjects from the db PROFS
app.use('/showsubject', fisrtgetrouter);
app.use('/showsubject', secgetrouter);
app.use('/showsubject', thirdgetrouter);
app.use('/showsubject', fourthgetrouter);
app.use('/showsubject', fifthgetrouter);

//to delete the data about the subjects from the db PROFS
app.use('/deletesubject', fisrtdelrouter);
app.use('/deletesubject', secdelrouter);
app.use('/deletesubject', thirddelrouter);
app.use('/deletesubject', fourthdelrouter);
app.use('/deletesubject', fifthdelrouter);

//to delete the data about the subjects from the db PROFS
app.use('/updatesubject', fisrtupdaterouter);
app.use('/updatesubject', secupdaterouter);
app.use('/updatesubject', thirdupdaterouter);
app.use('/updatesubject', fourthupdaterouter);
app.use('/updatesubject', fifthupdaterouter);

{/*FORIEGN EXAMS SECTION */}
//to add the data about the subjects to the db FORIEGN
app.use('/addsubject', firstForiegnPostRouter);
app.use('/addsubject', secForiegnPostRouter);
app.use('/addsubject', thirdForiegnPostRouter);

//to get the data about the subjects from the db FORIEGN
app.use('/showsubject', firstForiegnGetRouter);
app.use('/showsubject', secForiegnGetRouter);
app.use('/showsubject', thirdForiegnGetRouter);

//to delete the data about the subjects from the db FORIEGN
app.use('/deletesubject', firstForiegnDelRouter);
app.use('/deletesubject', secForiegnDelRouter);
app.use('/deletesubject', thirdForiegnDelRouter);

{/*COMPETITIVE EXAMS SECTION */}
//to add the data about the subjects to the db COMPETITIVE
app.use('/addsubject', firstCompPostRouter);
app.use('/addsubject', secCompPostRouter);
app.use('/addsubject', thirdCompPostRouter);

//to get the data about the subjects from the db COMPETITIVE
app.use('/showsubject', firstCompGetRouter);
app.use('/showsubject', secCompGetRouter);
app.use('/showsubject', thirdCompGetRouter);

//to delete the data about the subjects from the db COMPETITIVE
app.use('/deletesubject', firstCompDelRouter);
app.use('/deletesubject', secCompDelRouter);
app.use('/deletesubject', thirdCompDelRouter);

//middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

app.listen(port, ()=>{
    console.log(`Server is listening on the port ${port}`);
})