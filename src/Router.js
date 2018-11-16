import React, { Component } from 'react';
import {  Router, Route, Link ,Switch} from "react-router";
import Main from "./App"
import Lottery from "./Lottery"
import CreateHistory from "history/createBrowserHistory"


const history = CreateHistory()

const App = () => (
    <Router history={history} >
      
      <Switch>
        <Route exact path="/" component={Main} />

        <Route path="/lottery" exact component={Lottery} />
       
       </Switch>

    </Router>
  );

export default App
