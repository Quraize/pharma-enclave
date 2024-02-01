import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import addAdminRouter from './routes/admin.rout.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 3000;
const app = express();
dotenv.config();
connectDB();

//to allow to get json from user/admin end
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server is listening on the port ${port}`);
})

app.use('/api/user', userRouter);
app.use('/api/admin', addAdminRouter);