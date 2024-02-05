import {Profsi, Profsii, Profsiii, Profsiv, Profsv} from '../../models/subject.model.js';

const profi = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    const newSubject = new Profsi({Id, subject, Detail});
    try {
      await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
       next(error);
    }
}

const profii = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    const newSubject = new Profsii({Id, subject, Detail });
    try {
        await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
       next(error);
    }
}

const profiii = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    const newSubject = new Profsiii({Id, subject, Detail });
    try {
            await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
       next(error);
    }
}

const profiv = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    const newSubject = new Profsiv({Id, subject, Detail });
    try {
            await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
        next(error);
    }
}

const profv = async(req, res, next)=>{
    const {Id, subject, Detail } = req.body
    const newSubject = new Profsv({Id, subject, Detail });
    try {
            await newSubject.save();
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
       next(error);
    }
}



export {profi, profii, profiii, profiv, profv}