import React from "react"
import {Link} from "react-router-dom"
import "./css/Homepage.css"
import Learner from "./Learner"
function Homepage(){
    return (
        <div className = "Home">
            
            <div className = "Repertoire">
                <h1>
                    <Link to = "/Repertoire" style={{textDecoration:"none", fontFamily:"Sacramento, cursive"}}>Our Repertoire</Link>
                </h1>
                <h3>Explore our courses galore!</h3>
                
            </div>
            
            <div className = "Learner">
                <img className = "imgLearner" src="Images/Learner.png" alt="Learner" ></img>
                <div className = "textLearner">
                    <h1>
                        <Link to = "/Learner" style={{textDecoration:"none"}} >Learner</Link>
                    </h1>
                    <h3>Learn, upskill, upgrade! </h3>
                </div>
                
            </div>
            <div className = "Instructor">
                <img className = "imgInstructor" src="Images/Instructor.png" alt="Instructor" ></img>
                
                <div className = "textInstructor">
                    <h1>
                        <Link to = "/Instructor" style={{textDecoration:"none"}}>Instructor</Link>
                    </h1>
                    <h3>Create engaging courses!</h3>
                </div>
              
            </div>
            <footer><a href='https://pngtree.com/so/Teachers'>Teachers png from pngtree.com/</a>
            <a href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com/</a>
            </footer>
        </div>
        )
}
   
export default Homepage;