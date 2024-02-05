import {Foriegni, Foriegnii, Foriegniii} from '../../models/subject.model.js';

const foriegni = async(req, res)=>{
    try {
        const subjects = await Foriegni.find({});

        if(!subjects){
            res.status(404).json({message: 'subject(s) not found'});
        }
         
        res.json(subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

const foriegnii = async(req, res)=>{
    try {
        const subjects = await Foriegnii.find({});

        if(!subjects){
            res.status(404).json({message: 'subject not found'});
        }

        res.json( subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

const foriegniii = async(req, res)=>{
    try {
        const subjects = await Foriegniii.find({});

        if(!subjects){
            res.status(404).json({message: 'subject not found'});
        }

        res.json(subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

export { foriegni, foriegnii, foriegniii};