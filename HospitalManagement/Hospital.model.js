const mongoose=require("mongoose")

const HospitalSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressline1:{
        type:String,
        required:true
    },
    addressline2:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    Pincode:{
        type:String,
        required:true
    },
    specialization:[
        {
            type:String,
        }
    ]
},{timestamps:true})

export const Hospitals=mongoose.model("Hospitals",HospitalSchema)