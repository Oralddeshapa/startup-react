import React, { Component } from 'react';
import LogIn from '../Components/Authorization/log_in';
import SignUp from '../Components/Authorization/sign_up'
import IdeaList from '../Components/Ideas/IdeaList'
import NewIdea from '../Components/Ideas/CreateIdea'
import UpdateIdea from '../Components/Ideas/UpdateIdea'
import Idea from '../Components/Ideas/IdeaPage'
import Sub from '../Components/Ideas/Subscribe'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from '../Components/Header/Header'

class Routers extends Component {

  render() {
    return (
        <Router>
          <div>
            <Header/>
            <Route exact path='/' component={IdeaList} />
            <Route path="/sign_up" component={SignUp} />
            <Route path="/log_in" component={LogIn} />
            <Route path="/new_idea" component={NewIdea}/>
            <Route path="/update_idea/:id" component={UpdateIdea}/>
            <Route path="/ideas/:id" component={Idea}/>
            <Route path="/subscribe/:id/:token" component={Sub}/>
          </div>
        </Router>
    );
  }
}

export default Routers;
