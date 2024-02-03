import {Profsi, Profsii, Profsiii, Profsiv, Profsv} from '../../models/subject.model.js';

const profi = async(req, res)=>{
    try {
        const subjects = await Profsi.find({});

        if(!subjects){
            res.status(404).json({message: 'subject(s) not found'});
        }
         
        res.json(subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

const profii = async(req, res)=>{
    try {
        const subjects = await Profsii.find({});

        if(!subjects){
            res.status(404).json({message: 'subject not found'});
        }

        res.json( subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

const profiii = async(req, res)=>{
    try {
        const subjects = await Profsiii.find({});

        if(!subjects){
            res.status(404).json({message: 'subject not found'});
        }

        res.json(subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

const profiv = async(req, res)=>{
    try {
        const subjects = await Profsiv.find({});

        if(!subjects){
            res.status(404).json({message: 'subject not found'});
        }

        res.json(subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

const profv = async(req, res)=>{
    try {
        const subjects = await Profsv.find({});

        if(!subjects){
            res.status(404).json({message: 'subject not found'});
        }

        res.json(subjects);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal error'});
    }
}

export {profi, profii, profiii, profiv, profv};