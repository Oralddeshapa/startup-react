import React, { Component } from 'react';
import LogIn from '../Components/Authorization/log_in';
import SignUp from '../Components/Authorization/sign_up'
import IdeaList from '../Components/Ideas/IdeaList'
import NewIdea from '../Components/Ideas/CreateIdea'
import Idea from '../Components/Ideas/IdeaPage'
import { BrowserRouter as Router, Route } from "react-router-dom"

class Routers extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={IdeaList} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/log_in" component={LogIn} />
          <Route path="/new_idea" component={NewIdea}/>
          <Route path="/ideas/:id" component={Idea}/>
        </div>
      </Router>
    );
  }
}

export default Routers;
