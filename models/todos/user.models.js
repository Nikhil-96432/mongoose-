import { Timestamp } from "bson"
import { stringify } from "querystring"

const mongoose=require("mongoose")

const userSchema= new mongoose.schema({//document starts

    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        password:{
            type:String,
            required:[true,"password is required"]
        }
    },
}/*document ends*/,{timestamps:true})

export const User=mongoose.model("User",userSchema)//this User will be registered as colletion in mongoDB
