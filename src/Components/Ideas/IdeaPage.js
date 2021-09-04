import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import useStyles from './IdeaPageStyles.js'

export default function CreateIdea() {

  const classes = useStyles();
  const { id } = useParams();

  const [state, setState] = React.useState({
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
        <Typography component="h1" variant="h5">
          Create Idea
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            disabled
            variant="outlined"
            margin="normal"
            label="Required"
            inputProps={{
              name: 'title',
            }}
            fullWidth
          />
          <TextField
            disabled
            variant="outlined"
            margin="normal"
            inputProps={{
              name: 'problem',
            }}
            label="Required"
            fullWidth
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Create Idea
          </Button>
        </form>
      </div>
    </Container>
  );

}
