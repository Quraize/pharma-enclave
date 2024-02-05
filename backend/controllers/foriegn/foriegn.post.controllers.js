import {Foriegni, Foriegnii, Foriegniii} from '../../models/subject.model.js';

const foriegni = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Foriegni({Id, subject, Detail});

        const subjectFind = await Foriegni.findOne({subject: subject, Id: Id});

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

const foriegnii = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Foriegnii({Id, subject, Detail });

        const subjectFind = await Foriegnii.findOne({subject: subject, Id: Id});

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

const foriegniii = async(req, res)=>{
    
    try {
        const {Id, subject, Detail } = req.body

        const newSubject = new Foriegniii({Id, subject, Detail });

        const subjectFind = await Foriegniii.findOne({subject: subject, Id: Id});

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

export {foriegni, foriegnii, foriegniii};