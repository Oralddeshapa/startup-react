import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import Container from '@material-ui/core/Container';
import { Table } from 'reactstrap';
import Button from '@material-ui/core/Button';
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

  const handleDelete = (e) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/ideas/${id}#destroy`,
    { params: {
        token: localStorage.getItem('token'),
        id: id,
      }
    })
     .then(res => {
       window.location.replace(`${process.env.REACT_APP_URL}`)
     })
     .catch(error => {
       console.log(error)
     })
  };

  const handleUpdate = (e) => {
    window.location.replace(`${process.env.REACT_APP_URL}/update_idea/` + id)
  };

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
       console.log(error)
       window.location.replace(`${process.env.REACT_APP_URL}`)
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
          {
            localStorage.getItem('role') === 'creator' ? (
              <div className={classes.button_block}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={(e) => {
                  handleUpdate(e)
                  }}>
                  Update
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={(e) => {
                  handleDelete(e)
                  }}>
                  Delete
                </Button>
              </div>
            ) :
            <div className={classes.button_block}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.comment_btn}
                onClick={(e) => {
                handleDelete(e)
                }}>
                Comment
              </Button>
            </div>
          }

      </div>
    </Container>
  );

}
