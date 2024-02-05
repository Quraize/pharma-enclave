import Admin from '../../models/admin.model.js';

const addAdmin = async(req, res, next) => {
    try {
        const {name, email, password} = req.body;
        const newAdmin = new authAdmin({name, email, password});
        
        const adminFind = await Admin.findOne({name: name, email: email, password: password});

        if(adminFind){
            res.status(400).json({})
        }
    } catch (error) {
        next(error);
    }
}