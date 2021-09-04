import React from "react"
import "./css/Checkbox.css"


function Checkbox(props){
    return(
        <div className="divCheckbox">
            <input onChange={props.onChange}  type={props.type} class={props.class} 
            value={props.value} name={props.name} id={props.name} 
            />

            <label for={props.name}>{props.name}</label>
        </div>
           
       
    )
}



export default Checkbox

