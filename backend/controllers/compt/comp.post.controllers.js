import { Compi, Compii, Compiii } from "../../models/subject.model.js";

const compi = async (req, res, next) => {
  const {Id, subject, Detail } = req.body
  try {
      if(!Id || !subject || !Detail){
          next(errorHandler(401, "Please Provide the necessary credentials."));
          return;
      }
      const newSubject = new Compi({Id, subject, Detail});
      const existingSubject = await Compi.findOne({subject});

      if(existingSubject){
          next(errorHandler(409, "Subject with this name Already exist."))
          return;
      }
      const saveSubject = await newSubject.save();
      res.status(201).json({message:'subj inserted successfully', newSubject});
  } catch (error) {
     next(error);
  }
};

const compii = async (req, res, next) => {
  const {Id, subject, Detail } = req.body
  try {
      if(!Id || !subject || !Detail){
          next(errorHandler(401, "Please Provide the necessary credentials."));
          return;
      }
      const newSubject = new Compii({Id, subject, Detail});
      const existingSubject = await Compii.findOne({subject});

      if(existingSubject){
          next(errorHandler(409, "Subject with this name Already exist."))
          return;
      }
      const saveSubject = await newSubject.save();
      res.status(201).json({message:'subj inserted successfully', newSubject});
  } catch (error) {
     next(error);
  }
};

const compiii = async (req, res, next) => {
  const {Id, subject, Detail } = req.body
  try {
      if(!Id || !subject || !Detail){
          next(errorHandler(401, "Please Provide the necessary credentials."));
          return;
      }
      const newSubject = new Compiii({Id, subject, Detail});
      const existingSubject = await Compiii.findOne({subject});

      if(existingSubject){
          next(errorHandler(409, "Subject with this name Already exist."))
          return;
      }
      const saveSubject = await newSubject.save();
      res.status(201).json({message:'subj inserted successfully', newSubject});
  } catch (error) {
     next(error);
  }
};

export { compi, compii, compiii };
