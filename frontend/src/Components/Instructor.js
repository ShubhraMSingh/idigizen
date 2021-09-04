import React, {useState} from "react";
import InstructorForm from "./InstructorForm";

import "./css/Instructor.css"

function Instructor(){
    
    
    const [course,setCourse] = useState(
        {title:'',numOfClasses:'',startDate:''}
    );
    
    const [description,setDescription] = useState(
        ''
    );

    const [daysSelected,setDaysSelected] = useState(
        []
    ); 

    

    const handleChange = (e) =>{
        const {name,value} = e.target;
        console.log(name);
        console.log(value);
        setCourse(prevValue=>{
            return{
                ...prevValue,
                [name]:value};
            });

    }
   
    const handleTextAreaChange = (e) =>{
        const {value} = e.target;
        const maxWords=200;
            
        var arrWords =value.split(/[\s]+/);
        var currentLength = arrWords.length;
        if(currentLength > maxWords){
            var noOfWordsToRemove = currentLength - maxWords;
            while(noOfWordsToRemove){
                arrWords.pop();
                noOfWordsToRemove--;
            }
        }
        var descriptionModified = arrWords.join(' ');
        
        console.log(descriptionModified);
        setDescription(descriptionModified);

    }
    
    const handleCheckboxChange = (e) => {
    
        const checked = e.target.checked;
        const checkedValue = e.target.value;
        const checkedName = e.target.name;
        const daysSelectedNum = [];          
                switch(checkedValue){
                    case "Mon":
                        daysSelectedNum.push(0);
                        break;
                    case "Tues":
                        daysSelectedNum.push(1);
                        break;
                    case "Wed":
                        daysSelectedNum.push(2);
                        break;
                    case "Thurs":
                        daysSelectedNum.push(3);
                        break;
                    case "Fri":
                        daysSelectedNum.push(4);
                        break;
                    case "Sat":
                        daysSelectedNum.push(5);
                        break;
                    case "Sun":
                        daysSelectedNum.push(6);
                    default:break;
                }  
                setDaysSelected(daysSelectedNum);
                
                console.log(daysSelectedNum);
    }
  
    
    return(
        <div className="InstructorPage">
            <div className = "item PublishedCourses">
                <h1>Your published courses...</h1>
                <ul>
                    <li> Advanced Javascript        </li>
                    <li> React Concepts             </li>
                    <li> Node Design Patterns       </li>
                </ul>
            </div>
            
            <div className="item CreateForm">
                <h1> Create a new Course...</h1>
               <InstructorForm 
               course={course}
               description={description}
               daysSelected = {daysSelected}
               onCreateCourse = {handleChange} 
               onSelectDays = {handleCheckboxChange}
               onAddDescription = {handleTextAreaChange}
             
               />

               
            </div>
            
        </div>
        

    )
    
}

export default Instructor