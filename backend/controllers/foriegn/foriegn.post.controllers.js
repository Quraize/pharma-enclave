import {Foriegni, Foriegnii, Foriegniii} from '../../models/subject.model.js';

const foriegni = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    try {
        if(!Id || !subject || !Detail){
            next(errorHandler(401, "Please Provide the necessary credentials."));
            return;
        }
        const newSubject = new Foriegni({Id, subject, Detail});
        const existingSubject = await Foriegni.findOne({subject});

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

const foriegnii = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    try {
        if(!Id || !subject || !Detail){
            next(errorHandler(401, "Please Provide the necessary credentials."));
            return;
        }
        const newSubject = new Foriegnii({Id, subject, Detail});
        const existingSubject = await Foriegnii.findOne({subject});

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

const foriegniii = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    try {
        if(!Id || !subject || !Detail){
            next(errorHandler(401, "Please Provide the necessary credentials."));
            return;
        }
        const newSubject = new Foriegniii({Id, subject, Detail});
        const existingSubject = await Foriegniii.findOne({subject});

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

export {foriegni, foriegnii, foriegniii};