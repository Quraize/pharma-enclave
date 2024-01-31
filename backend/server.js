import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const port = process.env.PORT || 3000;
const app = express();
dotenv.config();
connectDB();

app.listen(port, ()=>{
    console.log(`Server is listening on the port ${port}`);
})