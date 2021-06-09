import React,{  useEffect } from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from './home.js'
import Login from './login/login.js'
import SignIn from "./login/signUp";
import DevelopmentalInformation from "./developmentalInformation.js"


function App() {

  return (
    <div>
  <Router>
     <Switch>
     <Route path="/" exact>
          <Home/>
      </Route>
      <Route path="/login">
          <Login />        
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/developmentalInformation">
          <DevelopmentalInformation />
        </Route>
      </Switch>
  </Router>

  </div>
  );
}

export default App;
