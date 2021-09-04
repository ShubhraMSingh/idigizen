import React from "react";

import {Switch,Route} from "react-router-dom"

import Homepage from "./Components/Homepage"
import Repertoire from "./Components/Repertoire"
import Instructor from "./Components/Instructor"
import Learner from "./Components/Learner" 
import InstructorForm from "./Components/InstructorForm"


function App(){
  return(
    <Switch>
      <Route path="/"   exact    component={Homepage}></Route>
      <Route path="/Repertoire"  component={Repertoire}></Route>
      <Route path="/Instructor"  component={Instructor}></Route>
      <Route path="/Learner"     component={Learner}></Route>
      <Route path="/InstructorForm"     component={InstructorForm}></Route> 
    </Switch>
    
  )
}


export default App;
