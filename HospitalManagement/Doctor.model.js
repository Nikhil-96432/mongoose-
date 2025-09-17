const mongoose=require("mongoose")

// const Hospitalhours=new mongoose.Schema({
//     name:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Hospitals",
//         required:true
//     },
//    workingHours: {
//     type:Number,
//     required:true
//     }
// })

const DoctorSchema= new mongoose.Schema({//schema is a pre-defined structure which can be like array of objects and objects of objects
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    WorkinHospital:{// u need to put working hours(key-value) in what hospital(key-value).if we see from above , it is in itself is schema which u can give it in type
        type:[// u can put above schema in the value of type
            {//1st object
                name:{
                     type:mongoose.Schema.Types.ObjectId,
                     ref:"Hospitals",
                     required:true
            }
        },
           {//2nd object
            workingHours: {
                      type:Number,
                      required:true
            }
        }
        ]
    }
},{timestamps:true})

export const Doctors=mongoose.model("Doctors",DoctorSchema)
