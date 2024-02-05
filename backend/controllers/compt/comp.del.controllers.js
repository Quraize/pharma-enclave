import {Compi, Compii, Compiii,} from '../../models/subject.model.js';

const compi = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Compi.findOneAndDelete({Id: Id, subject: subject});

        if(!deletedSubject){
            res.status(404).json({message:'Subject not found.'});
            return
        }

        res.json({message:'Subject deleted successfully', deletedSubject})
    } catch (error) {
        console.log("Error deleting subject", error.message);
        res.status(500).json({message:'internal server error'});
    }
}

const compii = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Compii.findOneAndDelete({Id: Id, subject: subject});

        if(!deletedSubject){
            res.status(404).json({message:'Subject not found.'});
            return
        }

        res.json({message:'Subject deleted successfully', deletedSubject})
    } catch (error) {
        console.log("Error deleting subject", error.message);
        res.status(500).json({message:'internal server error'});
    }
}

const compiii = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Compiii.findOneAndDelete({Id: Id, subject: subject});

        if(!deletedSubject){
            res.status(404).json({message:'Subject not found.'});
            return
        }

        res.json({message:'Subject deleted successfully', deletedSubject})
    } catch (error) {
        console.log("Error deleting subject", error.message);
        res.status(500).json({message:'internal server error'});
    }
}

export {compi, compii, compiii};