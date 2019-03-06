import React, { Component, Fragment } from 'react';
import TableContent from './TableContent.js'
import Employees from './Employee/Employees.js';
import { BrowserRouter , Route } from "react-router-dom";
import Home from './home'
import Tasks from './Task/Tasks.js';

class App extends Component {
  constructor(props){
    super(props); 
  }

  render() {
    return ( 
      <BrowserRouter>
      <Fragment>
        <Route path="/" component={Home}></Route>
        <Route path="/Employer" component={Employees}></Route> 
        <Route path="/Tasks" component={Tasks}></Route>
        <Route path="/tableContent" component={TableContent}></Route> 
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
