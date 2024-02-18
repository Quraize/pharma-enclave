import {Compi, Compii, Compiii,} from '../../models/subject.model.js';
import { errorHandler } from '../../utils/error.handler.js';

const compi = async (req, res, next)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Compi.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

const compii = async (req, res, next)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Compii.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

const compiii = async (req, res, next)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Compiii.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

export {compi, compii, compiii};