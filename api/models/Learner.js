import mongoose from "mongoose";

const Schema = mongoose.schema();

const LearnerSchema = new Schema({
    
    name:{
        type:String,
        required:true
    },
    coursesEnrolled:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }
    ],
    timetable:{
        type:[],
    }

  
},
    {timestamps:true}
);

mongoose.model('learners',LearnerSchema);