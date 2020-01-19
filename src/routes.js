import React from 'react';
import { Switch, Route} from "react-router-dom";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";


export default(
    <Switch>
        <Route component={Landing} exact path="/"/>
        <Route component={Projects} path="/projects"/> 
      
    </Switch>
)