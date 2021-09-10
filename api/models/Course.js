import mongoose from "mongoose";

const subSchemaCourseDetail = new mongoose.Schema({
    day:{type:String, required:true},
    content:{type:String, required:true}
  });

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
    details:{
        type:[subSchemaCourseDetail],
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