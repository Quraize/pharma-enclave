import {Foriegni, Foriegnii, Foriegniii} from '../../models/subject.model.js';

const foriegni = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Foriegni.findOneAndDelete({Id: Id, subject: subject});

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

const foriegnii = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Foriegnii.findOneAndDelete({Id: Id, subject: subject});

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

const foriegniii = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Foriegniii.findOneAndDelete({Id: Id, subject: subject});

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

export { foriegni, foriegnii, foriegniii};