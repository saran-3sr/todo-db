const mongoose=require("mongoose")
const Schema=mongoose.Schema

const todoSchema=new Schema({
    text:{
        type:String,
        required:true
    },
    Complete:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:String,
        default:Date.now()
    }
    
})

const Todo=mongoose.model("Todo",todoSchema)
module.exports=Todo