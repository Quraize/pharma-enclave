import {Foriegni, Foriegnii, Foriegniii} from '../../models/subject.model.js';
import { errorHandler } from '../../utils/error.handler.js';

const foriegni = async (req, res, next)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Foriegni.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

const foriegnii = async (req, res, next)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Foriegnii.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

const foriegniii = async (req, res, next)=>{
   const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Foriegniii.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

export { foriegni, foriegnii, foriegniii};