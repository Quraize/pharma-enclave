import { Profsi, Profsii, Profsiii, Profsiv, Profsv} from '../../models/subject.model.js';
import { errorHandler } from '../../utils/error.handler.js';

const profi = async (req, res, next)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Profsi.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

const profii = async (req, res)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Profsii.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

const profiii = async (req, res)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Profsiii.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

const profiv = async (req, res)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Profsiv.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

const profv = async (req, res)=>{
    const { Id, subject, Detail } = req.body
    try {
        const deletedSubject = await Profsv.findOneAndDelete({ subject: subject});

        if(!deletedSubject){
            next(errorHandler(404, "Subject not Found"));
            return;
        }

        res.status(201).json({message:'subject deleted successfully'});
    } catch (error) {
        next(error);
    }
}

export {profi, profii, profiii, profiv, profv};