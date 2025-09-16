import { User } from "./user.models"

const mongoose=require("mongoose")

const todoSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId, // this is the objectId data type of mongoDb(mongoose schema)= unique identifier of user.
        ref:"User"
    },
    subTodos:[//this will be array of objects9subtodos.
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:"subTodo"  
        }
    ]
},{timestamps:true})// why timestamp's' as it includes created at and updated at

export const Todo=mongoose.model('Todo',todoSchema)