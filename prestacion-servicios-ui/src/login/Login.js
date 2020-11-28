import React from 'react';
import './Login.css';

// Router
import { useHistory } from 'react-router-dom'

// Material design components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Login() {
  const history = useHistory();

  function redirectToHomePage() {
    history.push('/home');
  }

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Crete Round', 
        'serif'
      ].join(','),
  },});

  const classes = useStyles();

  return (
  <ThemeProvider theme={theme}>
    <form noValidate className="login-form">
      <Typography component="h1" variant="h5">
          Iniciar sesión
      </Typography>

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Correo"
        name="email"
        autoComplete="email"
        autoFocus
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={redirectToHomePage}
      >
        Ingresar
      </Button>
    </form>

  </ThemeProvider>

  );
}

export default Login;
