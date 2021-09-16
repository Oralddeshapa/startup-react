import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright.js'
import useStyles from './Authorization.js'
import axios from 'axios';
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function SignUp() {

  let history = useHistory();

  const classes = useStyles();

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Creator',
    redirect_root: false,
  })

  let handleNameChange = (e) => {
    setState({
      ...state,
      name: e.target.value
    });
  }

  let handleEmailChange = (e) => {
    setState({
      ...state,
      email: e.target.value
    });
  }

  let handlePassChange = (e) => {
    setState({
      ...state,
      password: e.target.value
    });
  }

  const handleRoleChange = (e) => {
    setState({
      ...state,
      role: e.target.value
    });
  };

  let handleSubmit = (e) => {
    if ( EMAIL_REGEX.test(state.email) ) {
      axios.post(`${process.env.REACT_APP_API_URL}/users`, {
        username: state.name,
        email: state.email,
        password: state.password,
        role: state.role.toLowerCase(),
        token: localStorage.getItem('token')
      })
      .then(response => {
        axios.post(`${process.env.REACT_APP_API_URL}/authorize`, {
          email: state.email,
          password: state.password,
          token: localStorage.getItem('token') //do u even need it ?
        })
        .then(response => {
          localStorage.setItem('token', response.data["token"])
          localStorage.setItem('role', response.data["role"])
          localStorage.setItem('username', response.data["username"])
          history.push('/')
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch(error => {
        console.log("Error" + error)
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
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="name"
            helperText="Name"
            name="name"
            autoFocus
            onChange={handleNameChange}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            helperText="Email Address"
            name="email"
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            helperText="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassChange}
          />

          <RadioGroup
           row aria-label="position"
           name="position"
           defaultValue="Creator"
           onChange={handleRoleChange}
           >
            <FormControlLabel
              value="Creator"
              control={<Radio color="primary" />}
              label="Creator"
            />
            <FormControlLabel
              value="Investor"
              control={<Radio color="primary" />}
              label="Investor"
            />
          </RadioGroup>

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
      { state.redirect_root ? <Redirect to='/'/> : <p/>}
    </Container>
  );
}
