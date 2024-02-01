import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    detail:{
        type: String,
        required: true,
    }
}, {timestamps: true});

const News = mongoose.model('News', newsSchema); //the name must singular and uppercase.

export default News;