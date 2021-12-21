import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './home.js'
import Login from './login/login'
import Signup from "./login/signUp.js";
import DevelopmentalInformation from "./developmentalInformation.js"
import HeightWeight from "./heightWeight.js"
import WightHistory from "./weightHistory.js"
import DataExample from "./dataExample.js"
import Vaccine from "./vaccine.js"
import ChatBotApp from "./chatbot/cahtBotApp.js"
import UploadPictures from "./uploadPictures"



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

      {/* <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header> */}

    </div>
  );
}
const MenuRoute = () => {
  return (
    <Router>
      <DevelopmentalInformation />
      <Route path="/developmentalInformation" >
        <h1>developmentalInformation</h1>
      </Route>
      <Route path="/HeightWeight" >
        <DevelopmentalInformation />
        <HeightWeight />
      </Route>
      <Route path="/weightHistory" >
        <DevelopmentalInformation />
        <HeightWeight />
        <WightHistory />
      </Route>
      <Route path="/dataExample" >
        <DevelopmentalInformation />
        <DataExample />
      </Route>
      <Route path="/vaccine" >
        <DevelopmentalInformation />
        <Vaccine />
      </Route>
      <Route path="/chatBot" >
        <DevelopmentalInformation />
      <ChatBotApp/>
      </Route>
      <Route path="/uploadPictures" >
        <DevelopmentalInformation />
      <UploadPictures/>
      </Route>
    </Router>
  )
}
export default App;
