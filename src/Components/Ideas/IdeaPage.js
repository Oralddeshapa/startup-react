import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import Container from '@material-ui/core/Container';
import { Table } from 'reactstrap';
import axios from 'axios';

import useStyles from './IdeaPageStyles.js'

export default function CreateIdea() {

  const classes = useStyles();
  const { id } = useParams();

  const [state, setState] = useState({
    creator: '',
    title: '',
    problem: '',
    field: '',
    region: '',
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/ideas/${id}`,
    { params: {
        token: localStorage.getItem('token'),
        id: id,
      }
    })
     .then(res => {
       let data = res.data
       setState({
         creator: data["creator"],
         title: data["title"],
         problem: data["problem"],
         field: data["field"],
         region: data["region"],
       });
     })
     .catch(error => {
       alert(error)
     })
  }, [])

  return (
    <Container component="main" maxWidth="xs">

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Table>
          <tbody>
          <tr>
            <th scope="row">Creator</th>
            <td>{state.creator}</td>
          </tr>
            <tr>
              <th scope="row">Title</th>
              <td>{state.title}</td>
            </tr>
            <tr>
              <th scope="row">Problem</th>
              <td>{state.problem}</td>
            </tr>
            <tr>
              <th scope="row">Field</th>
              <td>{state.field}</td>
            </tr>
            <tr>
              <th scope="row">Region</th>
              <td>{state.region}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );

}
