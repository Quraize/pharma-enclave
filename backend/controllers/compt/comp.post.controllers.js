import { Compi, Compii, Compiii } from "../../models/subject.model.js";

const compi = async (req, res, next) => {
  const { Id, subject, Detail } = req.body;
  const newSubject = new Compi({ Id, subject, Detail });
  try {
    await newSubject.save();
    res.status(201).json({ message: "subj inserted successfully", newSubject });
  } catch (error) {
    next(error);
  }
};

const compii = async (req, res, next) => {
  const { Id, subject, Detail } = req.body;
  const newSubject = new Compii({ Id, subject, Detail });
  try {
    await newSubject.save();
    res.status(201).json({ message: "subj inserted successfully", newSubject });
  } catch (error) {
    next(error);
  }
};

const compiii = async (req, res, next) => {
  const { Id, subject, Detail } = req.body;
  const newSubject = new Compiii({ Id, subject, Detail });
  try {
    await newSubject.save();
    res.status(201).json({ message: "subj inserted successfully", newSubject });
  } catch (error) {
    next(error);
  }
};

export { compi, compii, compiii };
