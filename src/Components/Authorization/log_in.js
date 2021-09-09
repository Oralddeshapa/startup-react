import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright.js'
import useStyles from './Authorization.js'
import axios from 'axios';

export default function LogIn() {

  let state = {
    email: '',
    password: '',
  }

  let handleEmailChange = (e) => {
    state.email = e.target.value;
  }

  let handlePassChange = (e) => {
    state.password = e.target.value;
  }

  let handleSubmit = (e) => {
    axios.post(`${process.env.REACT_APP_API_URL}/authorize`, {
      email: state.email,
      password: state.password,
      token: localStorage.getItem('token') //do u even need it ?
    })
    .then(response => {
      localStorage.setItem('token', response.data["token"])
      localStorage.setItem('role', response.data["role"])
      localStorage.setItem('username', response.data["username"])
      console.log('You successfully authorized')
      window.location.replace(`${process.env.REACT_APP_URL}`)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            helperText="Email Address"
            name="email"
            autoComplete="email"
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => {
            handleSubmit(e)
            }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign_up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
