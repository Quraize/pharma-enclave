import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 3000;
const app = express();
dotenv.config();
connectDB();

app.listen(port, ()=>{
    console.log(`Server is listening on the port ${port}`);
})

app.use('/api/user', userRouter);