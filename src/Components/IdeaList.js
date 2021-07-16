import React from 'react';
import axios from 'axios';

export default class IdeaList extends React.Component {
  state = {
    ideas: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/ideas`)
      .then(res => {
        this.setState({ ideas: res.data })
      })
  }

  render() {
    return (
      <ul>
        { this.state.ideas.map( idea => <li>{ idea.title }</li> ) }
      </ul>
    )
  }
}
