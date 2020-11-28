import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

// Components
import Login from './login/Login';
import Home from './home/Home';
import ListaUsuarios from './usuario/lista-usuarios/ListaUsuarios';
import CreaUsuario from "./usuario/crea-usuario/CreaUsuario";
import EditaUsuario from "./usuario/edita-usuario/EditaUsuario";
import ListaPrestadores from './prestador/lista-prestadores/ListaPrestadores';
import CreaPrestadores from "./prestador/crear-prestadores/CreaPrestadores";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function App() {

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
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Administración y Gestión de Prestación de Servicios
          </Typography>
        </Toolbar>
      </AppBar>
  </div>
    <Router>
      <Switch>
      <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/usuarios/crear" component={CreaUsuario} />
        <Route path="/usuarios/editar/:id" component={EditaUsuario} />
        <Route path="/usuarios" component={ListaUsuarios} />
        <Route path="/prestadores/crear" component={CreaPrestadores} />
        <Route path="/prestadores" component={ListaPrestadores} />
        <Route path="/">
          <Redirect exact from='/' to='/login'/>
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}
