import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Table } from 'reactstrap';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import useStyles from './IdeaPageStyles.js'

export default function CreateIdea() {

  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comments.comments)

  const [state, setState] = useState({
    text: '',
    creator: '',
    title: '',
    problem: '',
    field: '',
    region: '',
    redirect_root: false,
    redirect_update: false,
    subscribed: false,
    rating: '',
  });

  const handleDelete = (e) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/ideas/${id}#destroy`, {
      params: {
        token: localStorage.getItem('token'),
        id: id,
      }
    })
     .then(res => {
       setState({
         ...state,
         redirect_root: true
       });
     })
     .catch(error => {
       console.log(error)
     })
  };

  const handleChange = (e) => {
    setState({
      ...state,
      text: e.target.value
    });
  }

  const handleUpdate = (e) => {
    setState({
      ...state,
      redirect_update: true
    });
  };

  const handleRating = (e, newValue) => {
    axios.post(`${process.env.REACT_APP_API_URL}/ideas/${id}/rate`, {
      rating: newValue,
      idea_id: id,
      token: localStorage.getItem('token')
    })
     .then(res => {
       setState({
         ...state,
         rating: newValue,
       });
     })
     .catch(error => {
       console.log(error)
     })
  }

  const handleComment = (e) => {
    setState({
      ...state,
      text: ''
    });
    axios.post(`${process.env.REACT_APP_API_URL}/comments#create`, {
      text: state.text,
      idea_id: id,
      token: localStorage.getItem('token')
    })
     .then(res => {
       dispatch({type: 'LOAD_COMMENTS', payload: res.data.comments})
     })
     .catch(error => {
       console.log(error)
     })
  };

  const handleSubscribtion = (e) => {
    if (!state.subscribed) {
      axios.post(`${process.env.REACT_APP_API_URL}/ideas/${id}/subscribe`, {
        id: id,
        token: localStorage.getItem('token')
      })
       .then(res => {
         setState({
           ...state,
           subscribed: true
         });
       })
       .catch(error => {
         console.log(error)
       })
    }
    else {
      axios.post(`${process.env.REACT_APP_API_URL}/ideas/${id}/unsubscribe`, {
        idea_id: id,
        token: localStorage.getItem('token')
      })
       .then(res => {
         setState({
           ...state,
           subscribed: false
         });
       })
       .catch(error => {
         console.log(error)
       })
    }
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/ideas/${id}`, {
      params: {
        token: localStorage.getItem('token'),
        id: id,
      }
    })
     .then(res => {
       let data = res.data["idea"]
       setState({
         creator: data["creator"],
         title: data["title"],
         problem: data["problem"],
         field: data["field"],
         region: data["region"],
         subscribed: res.data["subbed"],
         rating: data["rating"]
       });
     })
     .catch(error => {
       console.log(error)
       setState({
         ...state,
         redirect_root: true,
       });
     })

     if (localStorage.getItem('role') === 'investor') {
       axios.get(`${process.env.REACT_APP_API_URL}/comments`,
       { params: {
           token: localStorage.getItem('token'),
           idea_id: id,
         }
       })
        .then(res => {
          dispatch({type: 'LOAD_COMMENTS', payload: res.data})
        })
        .catch(error => {
          console.log(error)
          setState({
            ...state,
            redirect_root: true,
          });
        })
     }
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
            <tr>
              <th score="row">Rating</th>
              <Rating
                name="simple-controlled"
                value={state.rating}
                onChange={handleRating}
              />
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
            ) : (
            <div className={classes.button_block}>
              <div style={{ overflow: 'scroll', height: '20vh'}}>
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    { comments.map( comment =>
                      <tr key={ comment.id }>
                        <td>{ comment.text }</td>
                      </tr>
                    ) }
                  </tbody>
                </Table>
              </div>
              <div>
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  helperText="comment"
                  value={state.text}
                  inputProps={{
                    name: 'text',
                  }}
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                />
                <div className={classes.button_block}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={(e) => {
                    handleComment(e)
                    }}>
                    Comment
                  </Button>
                  <Button
                    id="subscribe"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => {
                    handleSubscribtion(e)
                    }}>
                    {state.subscribed ? 'unsubscribe' : 'subscribe'}
                  </Button>
                </div>
              </div>
            </div>
            )
          }

      </div>
      { state.redirect_root ? <Redirect to='/'/> : <p/>}
      { state.redirect_update ? <Redirect to={'/update_idea/' + id}/> : <p/>}
    </Container>
  );

}
