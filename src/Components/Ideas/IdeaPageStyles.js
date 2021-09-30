import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  button: {
    display: 'inline-block',
    width: '45%',
    margin: theme.spacing(1, 1, 1),
  },
  button_block: {
    width: '100%',
    margin: theme.spacing(1, 1, 1),
  },
  comment_btn: {
    width: '60%',
    marginLeft: '19%',
  }
}));

export default useStyles;
