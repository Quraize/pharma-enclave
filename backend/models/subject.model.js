import mongoose from "mongoose";

const subjectsSchema = new mongoose.Schema({
    key: {
        type: Number,
        default: 1,
    },
    Id:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true,
        unique: true
    },
    Detail:{
        type: String,
        required:true,
    }
}, {timestamps: true});

subjectsSchema.pre('save', async function(next){
    const doc = this;
    if(!doc.isNew){
        return next();
    }

    const modelName = doc.constructor.modelName
    const lastDoc = await mongoose.model(modelName).findOne({}, {}, {sort:{'key': -1}});
    doc.key = lastDoc ? lastDoc.key + 1: 1;
    
    next();
})

const Profsi = mongoose.model('Profsi', subjectsSchema);
const Profsii = mongoose.model('Profsii', subjectsSchema);
const Profsiii = mongoose.model('Profsiii', subjectsSchema);
const Profsiv = mongoose.model('Profsiv', subjectsSchema);
const Profsv = mongoose.model('Profsv', subjectsSchema);

//foriegn exams models
const Foriegni = mongoose.model('Foriegni', subjectsSchema);
const Foriegnii = mongoose.model('Foriegnii', subjectsSchema);
const Foriegniii = mongoose.model('Foriegniii', subjectsSchema);

//comp exams models
const Compi = mongoose.model('Compi', subjectsSchema);
const Compii = mongoose.model('Compii', subjectsSchema);
const Compiii = mongoose.model('Compiii', subjectsSchema);

export { 
    Profsi, Profsii, Profsiii, Profsiv, Profsv, 
    Foriegni, Foriegnii, Foriegniii,
    Compi, Compii, Compiii,
};