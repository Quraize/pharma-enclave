import {Compi, Compii, Compiii,} from '../../models/subject.model.js';

const compi = async (req, res, next)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Compi.findOneAndDelete({Id: Id, subject: subject});

        if(!deletedSubject){
            res.status(404).json({message:'Subject not found.'});
            return
        }

        res.json({message:'Subject deleted successfully', deletedSubject})
    } catch (error) {
        next(error);
    }
}

const compii = async (req, res, next)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Compii.findOneAndDelete({Id: Id, subject: subject});

        if(!deletedSubject){
            res.status(404).json({message:'Subject not found.'});
            return
        }

        res.json({message:'Subject deleted successfully', deletedSubject})
    } catch (error) {
        next(error);
    }
}

const compiii = async (req, res, next)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Compiii.findOneAndDelete({Id: Id, subject: subject});

        if(!deletedSubject){
            res.status(404).json({message:'Subject not found.'});
            return
        }

        res.json({message:'Subject deleted successfully', deletedSubject})
    } catch (error) {
        next(error);
    }
}

export {compi, compii, compiii};