import React from 'react';
import axios from 'axios';
import './IdeaList.css';
import { Table } from 'reactstrap';
import Rating from '@material-ui/lab/Rating'

export default class IdeaList extends React.Component {
  state = {
    ideas: []
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/ideas`,
    { params: {
        token: localStorage.getItem('token')
      }
    })
     .then(res => {
       this.setState({ ideas: res.data })
     })
     .catch(error => {
       alert(error)
     })
  }

  render() {

    return (
      <div class="Table_container">
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Author</th>
              <th>Title</th>
              <th>Problem</th>
              <th>Region</th>
              <th>Field</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            { this.state.ideas.map( idea =>
              <tr key={ idea.id }>
                <th scope="row">{ idea.id }</th>
                <td>{ idea.creator }</td>
                <td>{ idea.title }</td>
                <td>{ idea.problem }</td>
                <td>{ idea.region }</td>
                <td>{ idea.field }</td>
                <Rating name="simple-controlled" value={ idea.rating }/>
              </tr>
            ) }
          </tbody>
        </Table>
      </div>
    )
  }
}
