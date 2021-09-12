import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './CreateIdeaStyles.js'

export default function CreateIdea() {

  const classes = useStyles();

  const [state, setState] = React.useState({
    title: '',
    problem: '',
    field: '',
    region: '',
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/get_fields`,
    { params: {
        token: localStorage.getItem('token')
      }
    })
     .then(res => {
       localStorage.setItem('regions', res.data["regions"])
       localStorage.setItem('fields', res.data["fields"])
     })
     .catch(error => {
       console.log(error)
       window.location.replace(`${process.env.REACT_APP_URL}`)
     })
  }, [])

  const handleChange = (e) => {
    const name = e.target.name;
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.title && state.problem && state.region && state.field) {
      axios.post(`${process.env.REACT_APP_API_URL}/ideas#create`, {
        title: state.title,
        problem: state.problem,
        region: state.region,
        field: state.field,
        token: localStorage.getItem('token')
      })
      .then(response => {
        console.log(response.data["id"])
        window.location.replace(`${process.env.REACT_APP_URL}` + '/ideas/' + response.data["id"])
      })
      .catch(error => {
        console.log(error)
      })
    }
  };

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
            variant="filled"
            margin="normal"
            required
            helperText="Title"
            inputProps={{
              name: 'title',
            }}
            fullWidth
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            margin="normal"
            inputProps={{
              name: 'problem',
            }}
            required
            helperText="Problem"
            fullWidth
            autoFocus
            onChange={handleChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Field</InputLabel>
            <Select
              value={state.field}
              onChange={handleChange}
              inputProps={{
                name: 'field',
              }}
            >
              {
                localStorage.getItem('fields') && localStorage.getItem('fields').split(',').map( field =>
                <MenuItem value={field}>{field}</MenuItem>
              ) }
            </Select>
            <FormHelperText>Place to start</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Region</InputLabel>
            <Select
              value={state.region}
              onChange={handleChange}
              inputProps={{
                name: 'region',
              }}
            >
              {
                localStorage.getItem('regions') && localStorage.getItem('regions').split(',').map( region =>
                <MenuItem value={region}>{region}</MenuItem>
              ) }
            </Select>
            <FormHelperText>Sphere to start</FormHelperText>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
            handleSubmit(e)
            }}>
            Create Idea
          </Button>
        </form>
      </div>
    </Container>
  );

}
