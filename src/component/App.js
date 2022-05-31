import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './home.js'
import Login from './login/login'
import Signup from "./login/signUp.js";
import Menu from "./Menu.js"
import HeightWeight from "./heightWeight.js"
import WightHistory from "./weightHistory.js"
import DevelopmentalInformation from "./DevelopmentalInformation.js"
import Vaccine from "./vaccine.js"
import ChatBotApp from "./chatbot/cahtBotApp.js"
import UploadPictures from "./uploadPictures/uploadPictures"


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/*" >
            <MenuRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


const MenuRoute = () => {
  return (

    <Router>
      <Menu />
      <Route path="/Menu" >
      </Route>
      <Route path="/HeightWeight" >
        <Menu />
        <HeightWeight />
      </Route>
      <Route path="/weightHistory" >
        <Menu />
        <HeightWeight />
        <WightHistory />
      </Route>
      <Route path="/DevelopmentalInformation" >
        <Menu />
        <DevelopmentalInformation />
      </Route>
      <Route path="/vaccine" >
        <Menu />
        <Vaccine />
      </Route>
      <Route path="/chatBot" >
        <Menu />
        <ChatBotApp />
      </Route>
      <Route path="/uploadPictures" >
        <Menu />
        <UploadPictures />
      </Route>
    </Router>
  )
}
export default App;
