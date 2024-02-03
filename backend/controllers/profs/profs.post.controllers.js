import {Profsi, Profsii, Profsiii, Profsiv, Profsv} from '../../models/subject.model.js';

const profi = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Profsi({Id, subject, Detail});

        const subjectFind = await Profsi.findOne({subject: subject, Id: Id});

        if (subjectFind) {
            res.status(400).json({message:'Subject with this is already exist'})
        } else {
            await newSubject.save();
        }
        
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
        if(error.name === 'MongoError' && error.code === 11000){
            res.status(400).json({message:'Subject with this is already exist'})
        }

        console.log(error.message);
        res.status(500).json({message:'internal server error'})
    }
}

const profii = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Profsii({Id, subject, Detail });

        const subjectFind = await Profsii.findOne({subject: subject, Id: Id});

        if (subjectFind) {
            res.status(400).json({message:'Subject with this is already exist'})
        } else {
            await newSubject.save();
        }
        
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
        if(error.name === 'MongoError' && error.code === 11000){
            res.status(400).json({message:'Subject with this is already exist'})
        }

        console.log(error.message);
        res.status(500).json({message:'internal server error'})
    }
}

const profiii = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Profsiii({Id, subject, Detail });

        const subjectFind = await Profsiii.findOne({subject: subject, Id: Id});

        if (subjectFind) {
            res.status(400).json({message:'Subject with this is already exist'})
        } else {
            await newSubject.save();
        }
        
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
        if(error.name === 'MongoError' && error.code === 11000){
            res.status(400).json({message:'Subject with this is already exist'})
        }

        console.log(error.message);
        res.status(500).json({message:'internal server error'})
    }
}

const profiv = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Profsiv({Id, subject, Detail });

        const subjectFind = await Profsiv.findOne({subject: subject, Id: Id});

        if (subjectFind) {
            res.status(400).json({message:'Subject with this is already exist'})
        } else {
            await newSubject.save();
        }
        
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
        if(error.name === 'MongoError' && error.code === 11000){
            res.status(400).json({message:'Subject with this is already exist'})
        }

        console.log(error.message);
        res.status(500).json({message:'internal server error'})
    }
}

const profv = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Profsv({Id, subject, Detail });

        const subjectFind = await Profsv.findOne({subject: subject, Id: Id});

        if (subjectFind) {
            res.status(400).json({message:'Subject with this is already exist'})
        } else {
            await newSubject.save();
        }
        
        res.status(201).json({message:'subj inserted successfully', newSubject});

    } catch (error) {
        if(error.name === 'MongoError' && error.code === 11000){
            res.status(400).json({message:'Subject with this is already exist'})
        }

        console.log(error.message);
        res.status(500).json({message:'internal server error'})
    }
}



export {profi, profii, profiii, profiv, profv}