import {Profsi, Profsii, Profsiii, Profsiv, Profsv} from '../../models/subject.model.js';
import { errorHandler } from '../../utils/error.handler.js';

const profi = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    try {
        if(!Id || !subject || !Detail){
            next(errorHandler(401, "Please Provide the necessary credentials."));
            return;
        }
        const newSubject = new Profsi({Id, subject, Detail});
        const existingSubject = await Profsi.findOne({subject});

        if(existingSubject){
            next(errorHandler(409, "Subject with this name Already exist."))
            return;
        }
        const saveSubject = await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});
    } catch (error) {
       next(error);
    }
}

const profii = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    try {
        if(!Id || !subject || !Detail){
            next(errorHandler(401, "Please Provide the necessary credentials."));
            return;
        }
        const newSubject = new Profsii({Id, subject, Detail});
        const existingSubject = await Profsii.findOne({subject});

        if(existingSubject){
            next(errorHandler(409, "Subject with this name Already exist."))
            return;
        }
        const saveSubject = await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});
    } catch (error) {
       next(error);
    }
}

const profiii = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    try {
        if(!Id || !subject || !Detail){
            next(errorHandler(401, "Please Provide the necessary credentials."));
            return;
        }
        const newSubject = new Profsiii({Id, subject, Detail});
        const existingSubject = await Profsiii.findOne({subject});

        if(existingSubject){
            next(errorHandler(409, "Subject with this name Already exist."))
            return;
        }
        const saveSubject = await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});
    } catch (error) {
       next(error);
    }
}

const profiv = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    try {
        if(!Id || !subject || !Detail){
            next(errorHandler(401, "Please Provide the necessary credentials."));
            return;
        }
        const newSubject = new Profsiv({Id, subject, Detail});
        const existingSubject = await Profsiv.findOne({subject});

        if(existingSubject){
            next(errorHandler(409, "Subject with this name Already exist."))
            return;
        }
        const saveSubject = await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});
    } catch (error) {
       next(error);
    }
}

const profv = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    try {
        if(!Id || !subject || !Detail){
            next(errorHandler(401, "Please Provide the necessary credentials."));
            return;
        }
        const newSubject = new Profsv({Id, subject, Detail});
        const existingSubject = await Profsv.findOne({subject});

        if(existingSubject){
            next(errorHandler(409, "Subject with this name Already exist."))
            return;
        }
        const saveSubject = await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});
    } catch (error) {
       next(error);
    }
}



export {profi, profii, profiii, profiv, profv}