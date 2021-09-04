import React, {useState} from "react"


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
                   <div key={index}>
                       <input
                        onChange = {handleChange}
                        name="day"
                        placeholder="Day..."

                        />
                        <textarea
                         onChange = {handleChange}
                         name="content"
                         placeholder="Add content(topics for the class)..."
                         rows="3"
                
                        />
                        <button onClick = {handleClick}>Add detail</button>
                    </div>
            ))}
            </form>
            
        </div>
        
    )
}

export default CourseDetails


