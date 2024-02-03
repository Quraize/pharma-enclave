import { Profsi, Profsii, Profsiii, Profsiv, Profsv} from '../../models/subject.model.js';

const profi = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Profsi.findOneAndDelete({Id: Id, subject: subject});

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

const profii = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Profsii.findOneAndDelete({Id: Id, subject: subject});

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

const profiii = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Profsiii.findOneAndDelete({Id: Id, subject: subject});

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

const profiv = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Profsiv.findOneAndDelete({Id: Id, subject: subject});

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

const profv = async (req, res)=>{
    try {
        const { Id, subject, Detail } = req.body

        const deletedSubject = await Profsv.findOneAndDelete({Id: Id, subject: subject});

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

export {profi, profii, profiii, profiv, profv};