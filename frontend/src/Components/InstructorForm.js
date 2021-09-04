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
        .then(response => response.json())
        .then(data => console.log(data));

     }
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        postData();
    };

   
        
    const arrDays=['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];

    return (
        <div>
            <form>
                
                <input 
                name="title" 
                placeholder="Title" 
                onChange= {onCreateCourse}
                value={title}/>
               
                <textarea
                name="description"
                placeholder="Describe your course..." 
                rows="3"
                pattern="^(?:\b\w+\b[\s\r\n]*){1,200}$"
                onChange= {onAddDescription} 
                value={description} />

                <input 
                name="numOfClasses" 
                placeholder="Number Of Classes"
                onChange= {onCreateCourse} 
                value={numOfClasses} />

                <input 
                name="startDate" 
                type="date" 
                id="start" 
                onChange= {onCreateCourse} 
                value={startDate} />

             
                <div className="weekDays-selector">
                   {arrDays.map((day,i)=>{return (
                       <Checkbox name={day} type="checkbox" class="weekday" value={day} 
                       onChange = {e=>onSelectDays(e)} />
                       )})}
                </div>
             
                
                <div><CourseDetails addDetail = {addDetail}/></div>   
            
              
                <button type="submit" onClick={handleSubmit}>Submit</button>
                   
            </form>
        </div>
     
     
    )
}


export default InstructorForm 