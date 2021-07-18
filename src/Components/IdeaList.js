import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import Rating from '@material-ui/lab/Rating'

const API_URL = `http://localhost:3000`;

export default class IdeaList extends React.Component {
  state = {
    ideas: []
  }

  componentDidMount() {
    axios.get(API_URL + `/api/v1/ideas`)
      .then(res => {
        this.setState({ ideas: res.data })
      })
  }

  render() {

    return (
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Problem</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          { this.state.ideas.map( idea =>
            <tr>
              <th scope="row">{ idea.id }</th>
              <td>{ idea.title }</td>
              <td>{ idea.problem }</td>
              <Rating name="simple-controlled"/>
            </tr>
          ) }
        </tbody>
      </Table>
    )
  }
}
