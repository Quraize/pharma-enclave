import {Compi, Compii, Compiii,} from '../../models/subject.model.js';

const compi = async(req, res, next)=>{
    try {
        const subjects = await Compi.find({});
        res.json(subjects);
    } catch (error) {
        next(error);
    }
}

const compii = async(req, res, next)=>{
    try {
        const subjects = await Compii.find({});
        res.json( subjects);
    } catch (error) {
        next(error);
    }
}

const compiii = async(req, res, next)=>{
    try {
        const subjects = await Compiii.find({});
        res.json(subjects);
    } catch (error) {
        next(error);
    }
}

export { compi, compii, compiii};