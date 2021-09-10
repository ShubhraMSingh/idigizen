import express from "express";
import path from "path";

import OurSchedule from "./OurSchedule.js";

/*shubh*/// import {MongoClient} from 'mongodb';
import mongoose from "mongoose";
import ('./models/Course.js')




const app=express();

/*shubh*/ 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/iDigizenNew')
.then(()=>console.log('MongoDB connected through Mongoose'))
.catch(err=>console.log(err));


const __dirname = path.resolve();
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.use(express.json());
app.get('/api',(req,res)=>res.send('hi'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.post('/course', (req,res)=>{
    /*shubh    addCourse(req.body);    */
    const Course = mongoose.model('courses');
    const newCourse = req.body;
    new Course(newCourse)
    .save()
    .then(course=>{res.redirect('/courses')})
    .catch((err)=>console.log(`errored...${err}`));
   
    
    
    const objForSchedule = {startDate: new Date(req.body.startDate),
                            numOfClasses:req.body.numOfClasses,
                            daysSelected:req.body.daysSelected};
    console.log(`Obj we pass to schedule ${JSON.stringify(objForSchedule)}`);
    OurSchedule(objForSchedule);
   
});



/*shubh
const url = 'mongodb://localhost:27017';

async function addCourse(obj){
    const client = await MongoClient.connect(url, { useNewUrlParser: true });

    if (!client) {
        return;
    }

    console.log(obj);
    // const client = MongoClient.connect('mongodb://localhost:27017');
    const db=client.db('idigizen');
    await db.collection('courses').insertOne(obj);
}

*/


app.listen(3000,()=>console.log(`Server is up at 3000`));
