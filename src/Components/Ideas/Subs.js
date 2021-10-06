import React, { useEffect, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#aaa',
  },
}));

export default function Subs(params) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const classes = useStyles();

  return (
    <div>
      <Button style={{'margin-bottom' : '-5%', 'margin-top' : '-5%'}} onClick={handleToggle}>{params.views}</Button>
      <Backdrop className={classes.backdrop}
        open={open}
        onClick={handleClose}
      >
      <List className={classes.root}>
      {
        params.views == 0 ? (
          <ListItem>
            <ListItemText primary="No one is subbed" secondary="For now)" />
          </ListItem>
        ) : (
          params.subs.map( sub =>
            <ListItem>
              <ListItemText primary={sub.name} secondary={sub.mail} />
            </ListItem>
          )
        )
      }
      </List>
      </Backdrop>
    </div>
  );
}
