import {Foriegni, Foriegnii, Foriegniii} from '../../models/subject.model.js';

const foriegni = async(req, res, next)=>{
    try {
        const subjects = await Foriegni.find({});
        res.json(subjects);
    } catch (error) {
        next(error);
    }
}

const foriegnii = async(req, res, next)=>{
    try {
        const subjects = await Foriegnii.find({});
        res.json( subjects);
    } catch (error) {
       next(error)
    }
}

const foriegniii = async(req, res, next)=>{
    try {
        const subjects = await Foriegniii.find({});
        res.json(subjects);
    } catch (error) {
       next();
    }
}

export { foriegni, foriegnii, foriegniii};