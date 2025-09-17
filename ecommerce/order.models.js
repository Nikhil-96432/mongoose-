const mongoose=require("mongoose")

const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema= new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{// u need multiple info here like no of order of what product which u can refer it from product.modelsID so u will put array of objects here with new schema
        type:[orderItemSchema]//array of object(orderItemSchema) means new sub-Schema.
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],//limited the choices to enter.
        default:"PENDING"
    }
},{timestamps:true})

export const Order=mongoose.model("Order",orderSchema)