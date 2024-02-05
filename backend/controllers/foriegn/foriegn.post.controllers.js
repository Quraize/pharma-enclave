import {Foriegni, Foriegnii, Foriegniii} from '../../models/subject.model.js';

const foriegni = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    const newSubject = new Foriegni({Id, subject, Detail});
    try {
       await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
        next(error);
    }
}

const foriegnii = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    const newSubject = new Foriegnii({Id, subject, Detail });
    try {
        await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
       next(error);
    }
}

const foriegniii = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    const newSubject = new Foriegniii({Id, subject, Detail });
    try {
        await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
        next(error);
    }
}

export {foriegni, foriegnii, foriegniii};