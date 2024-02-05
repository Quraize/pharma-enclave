import {Compi, Compii, Compiii,} from '../../models/subject.model.js';

const compi = async(req, res)=>{
    try {
        const subjects = await Compi.find({});

        if(!subjects){
            res.status(404).json({message: 'subject(s) not found'});
        }
         
        res.json(subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

const compii = async(req, res)=>{
    try {
        const subjects = await Compii.find({});

        if(!subjects){
            res.status(404).json({message: 'subject not found'});
        }

        res.json( subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

const compiii = async(req, res)=>{
    try {
        const subjects = await Compiii.find({});

        if(!subjects){
            res.status(404).json({message: 'subject not found'});
        }

        res.json(subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

export { compi, compii, compiii};