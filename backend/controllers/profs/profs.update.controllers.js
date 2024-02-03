import { Profsi, Profsii, Profsiii, Profsiv, Profsv} from '../../models/subject.model.js';

const profi = async (req, res) => {
    try {
        const {Id, subject, Detail} = req.body

        const updateSubject = await Profsi.findOneAndUpdate({subject}, {Id, Detail}, {new: true});

        if(!updateSubject){
            res.status(404).json({message:'Subject not found'});
            return
        }

        res.json({message: 'Subject updates successfuly', updateSubject});
    } catch (error) {
        console.log('Error updating subject');
        res.status(500).json({message:'internal server error'});
    }
}

const profii = async (req, res) => {
    try {
        const {Id, subject, Detail} = req.body

        const updateSubject = await Profsii.findOneAndUpdate({subject}, {Id, Detail}, {new: true});

        if(!updateSubject){
            res.status(404).json({message:'Subject not found'});
            return
        }

        res.json({message: 'Subject updates successfuly', updateSubject});
    } catch (error) {
        console.log('Error updating subject');
        res.status(500).json({message:'internal server error'});
    }
}

const profiii = async (req, res) => {
    try {
        const {Id, subject, Detail} = req.body

        const updateSubject = await Profsiii.findOneAndUpdate({subject}, {Id, Detail}, {new: true});

        if(!updateSubject){
            res.status(404).json({message:'Subject not found'});
            return
        }

        res.json({message: 'Subject updates successfuly', updateSubject});
    } catch (error) {
        console.log('Error updating subject');
        res.status(500).json({message:'internal server error'});
    }
}

const profiv = async (req, res) => {
    try {
        const {Id, subject, Detail} = req.body

        const updateSubject = await Profsiv.findOneAndUpdate({subject}, {Id, Detail}, {new: true});

        if(!updateSubject){
            res.status(404).json({message:'Subject not found'});
            return
        }

        res.json({message: 'Subject updates successfuly', updateSubject});
    } catch (error) {
        console.log('Error updating subject');
        res.status(500).json({message:'internal server error'});
    }
}

const profv = async (req, res) => {
    try {
        const {Id, subject, Detail} = req.body

        const updateSubject = await Profsv.findOneAndUpdate({subject, Id, Detail}, {new: true});

        if(!updateSubject){
            res.status(404).json({message:'Subject not found'});
            return
        }

        res.json({message: 'Subject updates successfuly', updateSubject});
    } catch (error) {
        console.log('Error updating subject');
        res.status(500).json({message:'internal server error'});
    }
}

export {profi, profii, profiii, profiv, profv};