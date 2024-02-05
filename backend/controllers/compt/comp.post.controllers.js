import {Compi, Compii, Compiii,} from '../../models/subject.model.js';

const compi = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Compi({Id, subject, Detail});

        const subjectFind = await Compi.findOne({subject: subject, Id: Id});

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

const compii = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Compii({Id, subject, Detail });

        const subjectFind = await Compii.findOne({subject: subject, Id: Id});

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

const compiii = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Compiii({Id, subject, Detail });

        const subjectFind = await Compiii.findOne({subject: subject, Id: Id});

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

export {compi, compii, compiii}