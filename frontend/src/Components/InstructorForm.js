import React, {useState} from "react"
import "./css/InstructorForm.css"
import Checkbox from "./Checkbox"
import CourseDetails from "./CourseDetails"
import Detail from "./Detail"

function InstructorForm({course, description, daysSelected, onCreateCourse, onAddDescription, onSelectDays}){
    const {
        title,
        numOfClasses,
        startDate
        } = course; 
     

    const [details,setDetails] = useState(
        []
    );
    
    const addDetail = (detail) => {
         setDetails(prevDetails=>{return [...prevDetails, detail]});
    };


    const postData = ()=>{
        const dataToPost = {
            title:title,
            description:description,
            numOfClasses:numOfClasses,
            startDate:startDate,
            daysSelected:daysSelected,
            details:details
            }   
        var JSONToPost = JSON.stringify(dataToPost);
        

        const requestOptions = {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSONToPost};
        
        fetch('course', requestOptions)
        .then(response => console.log(response));

     }
     

    const handleSubmit = (e)=>{
        e.preventDefault();
        postData();
    };

   
        
    const arrDays=['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];

    return (
        <div class="card card-body createcourseclass">
            <form>
                
               <div class="form-group fieldgroup">
                <label for="title"> Course Title </label>  
                <input class="form-control"
                name="title" 
                placeholder="Enter the course title here... " 
                onChange= {onCreateCourse}
                value={title}/>
               </div>
               <div class="form-group fieldgroup">
               <label for="description"> Course Description </label> 
                <textarea class="form-control"
                name="description"
                placeholder="Describe your course..." 
                rows="3"
                pattern="^(?:\b\w+\b[\s\r\n]*){1,200}$"
                onChange= {onAddDescription} 
                value={description} />
                </div>
                <div class="form-group fieldgroup">
                <label for="numOfClasses"> Number Of Classes </label> 
                <input class="form-control"
                name="numOfClasses" 
                placeholder="Enter total number of classes for the course"
                onChange= {onCreateCourse} 
                value={numOfClasses} />
                </div>
                <div class="form-group fieldgroup">
                <label for="startDate"> Start Date of the course </label> 
                <input class="form-control"
                name="startDate" 
                type="date" 
                id="start" 
                onChange= {onCreateCourse} 
                value={startDate} />
                </div>
             

                <div class="form-group  fieldgroup">
                <label>Select days of the week on which you will conduct the classes </label> 
                <div className="weekDays-selector">
                   {arrDays.map((day,i)=>{return (
                       <Checkbox name={day} type="checkbox" class="weekday" value={day} 
                       onChange = {e=>onSelectDays(e)} />
                       )})}
                </div>
                </div>
                
                <div><CourseDetails addDetail = {addDetail}/></div>   
            
              
                
                <div class="row">
                    <button class="col-12 btn btn-primary"type="submit" onClick={handleSubmit}>Submit</button>
                </div>   
            </form>
        </div>
     
     
    )
}


export default InstructorForm 
