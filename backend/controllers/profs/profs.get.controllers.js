import {Profsi, Profsii, Profsiii, Profsiv, Profsv} from '../../models/subject.model.js';

const profi = async(req, res, next)=>{
    try {
        const subjects = await Profsi.find({});
        res.json(subjects);
    } catch (error) {
        next(error);
    }
}

const profii = async(req, res, next)=>{
    try {
        const subjects = await Profsii.find({});
        res.json( subjects);
    } catch (error) {
       next(error);
    }
}

const profiii = async(req, res, next)=>{
    try {
        const subjects = await Profsiii.find({});
        res.json(subjects);
    } catch (error) {
       next(error);
    }
}

const profiv = async(req, res, next)=>{
    try {
        const subjects = await Profsiv.find({});
        res.json(subjects);
    } catch (error) {
       next(error);
    }
}

const profv = async(req, res, next)=>{
    try {
        const subjects = await Profsv.find({});
        res.json(subjects);
    } catch (error) {
        next(error);
    }
}

export {profi, profii, profiii, profiv, profv};