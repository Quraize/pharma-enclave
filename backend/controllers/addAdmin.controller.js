import Admin from "../models/admin.model.js";
import bcryptjs from 'bcryptjs';

export const addAdmin = async (req, res) =>{         //the function is async because we are awaiting a statement.
    const {email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newAdmin = new Admin({ email, password: hashedPassword });
        try {
            await newAdmin.save();  //it 'awaited' because this statement is directly operating on the db, and it will take some time.
            res.status(201).json("User created successfully!");
        } catch (error) {
            res.status(500).json(error.message);
        }
};