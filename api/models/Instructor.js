import mongoose from "mongoose";

const Schema = mongoose.schema();

const InstructorSchema = new Schema({
    
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number
    },
    courses:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }
    ],
},
    {timestamps:true}
);

mongoose.model('instructors',InstructorSchema);