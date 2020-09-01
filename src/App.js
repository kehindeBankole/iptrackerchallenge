import React from "react";
import SuperHeroState from "../src/context/state";
import Home from "./pages/Home";
import {Nav }from '../src/component/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryView from "./pages/CountryView";
function App() {
  return (
    <SuperHeroState>
      
      <Router>
      <Nav />
       <Switch>
       <Route path="/" component={Home} exact/>
        <Route path="/country/:name" component={CountryView} exact/>
       </Switch>
      </Router>
    </SuperHeroState>
  );
}

export default App;
