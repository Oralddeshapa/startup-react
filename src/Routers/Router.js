import React, { Component } from 'react';
import LogIn from '../Components/log_in';
import SignUp from '../Components/sign_up'
import IdeaList from '../Components/IdeaList'
import { BrowserRouter as Router, Route } from "react-router-dom"

class Routers extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={IdeaList} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/log_in" component={LogIn} />
        </div>
      </Router>
    );
  }
}

export default Routers;
