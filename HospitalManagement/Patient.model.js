const mongoose=require("mongoose")

const PatientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diangosedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","female","others"],//choices will be registered at type
        required:true
    },
    Admittedin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospitals"
    }
},{timestamps:true})

export const Patients=mongoose.model("medicalRecord",PatientSchema)