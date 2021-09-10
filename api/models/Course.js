import mongoose from "mongoose";


const CourseSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    numOfClasses:{
        type:Number,
        required:true
    },
    startDate:{
        type:Date,
        required:true

    },
    daysSelected:{
        type:[Number],
        required:true

    },
    schedule:{
        type:[Date],
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Instructor'
    },
    learners:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Learner'
    }
    ],
},
    {timestamps:true}
);

mongoose.model('courses',CourseSchema);