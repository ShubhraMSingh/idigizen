import React, {useState} from "react"
import "./css/CourseDetails.css"

function CourseDetails({addDetail}){
    
const [detail, setDetail] = useState({day:"",content:""});

const handleChange = (e) =>{
   const {name,value} = e.target;
   setDetail(prevDetail=>{return {...prevDetail,
                                    [name]:value
                                };
                         });

}

const [formValues,setFormValues] = useState([{day:"",content:""}]);  
const addFormFields = () =>{
    setFormValues([...formValues, {day: "",content: "" }]);   

}

const handleClick = (e) => {
    e.preventDefault();
    addDetail(detail);
    addFormFields();   

};

   
    return (
        <div className="courseDetails">
            <h2>Add Course Details...Day Wise</h2>
            <form>
            {formValues.map((element,index)=>(
                   <div class="row" key={index}>
                       <div class="col-lg-3">
                       <input class="form-control"
                        onChange = {handleChange}
                        name="day"
                        placeholder="Day..."

                        />
                        </div>
                        <div class="col-lg-6">
                        <textarea class="form-control"
                         onChange = {handleChange}
                         name="content"
                         placeholder="Add content(topics for the class)..."
                         rows="1"
                
                        />
                        </div>
                        <div class="col-lg-3">
                        <button  class="btn btn-outline-primary" onClick = {handleClick}>Add detail</button>
                        </div>
                    </div>
            ))}
            </form>
            
        </div>
        
    )
}

export default CourseDetails


