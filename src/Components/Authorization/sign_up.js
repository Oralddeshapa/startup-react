import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright.js'
import useStyles from './Authorization.js'
import axios from 'axios';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function SignUp() {

  const classes = useStyles();

  let state = {
    name: '',
    email: '',
    password: '',
  }

  let handleNameChange = (e) => {
    state.name = e.target.value;
  }

  let handleEmailChange = (e) => {
    state.email = e.target.value;
  }

  let handlePassChange = (e) => {
    state.password = e.target.value;
  }

  let handleSubmit = (e) => {
    if ( EMAIL_REGEX.test(state.email) ) {
      axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
        username: state.name,
        email: state.email,
        password: state.password,
        token: localStorage.getItem('token')
      })
      .then(response => {
        if (response.data["error_code"]){
          console.log(response.data)
          alert("ERROR" + response.data["msg"])
        }
        else {
          console.log(response.data)
          alert(response.data["msg"])
        }
      })
      .catch(error => {
        alert(error)
      })
    }
    else {
      alert("Pls enter correct email")
    }

  }

  return (
    <Container component="main" maxWidth="xs">

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            onChange={handleNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
            handleSubmit(e)
            }}>
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
