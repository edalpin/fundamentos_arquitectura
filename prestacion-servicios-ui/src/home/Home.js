import './home.css';

// Router
import { useHistory } from 'react-router-dom'

// Material design components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PeopleIcon from '@material-ui/icons/People';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Home() {
  const history = useHistory();

  function handleRedirection(module, action) {
    const path = action ? `${module}/${action}` : module;
    history.push(path);
  }

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Crete Round', 
      'serif'
    ].join(','),
  },});


  const classes = useStyles();

  return(
  <ThemeProvider theme={theme}>
    <div className="home-container">
      <h1 className="home-container__title">Panel administrativo</h1>
      <h5 className="home-container__title">A continuación se muestran los diferentes tipos de usuarios. Seleccione las acciones respectivas a ejecutar </h5>
      <Card className="home-container__card">
        <Avatar aria-label="recipe" className="home-card__avatar">
            <AssignmentIndIcon />
        </Avatar>
        <CardHeader 
        title="Usuarios"/>
        <CardContent>
          <List component="nav">
            <ListItem
              button
              onClick={() => handleRedirection('usuarios', 'crear')}
            >
              <ListItemText primary="Crear"></ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => handleRedirection('usuarios', null)}
            >
              <ListItemText primary="Listar"></ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card className="home-container__card">
        <Avatar aria-label="recipe" className="home-card__avatar">
            <PeopleIcon />
        </Avatar>
        <CardHeader title="Clientes"/>
        <CardContent>
          <List component="nav">
            <ListItem
              button
              onClick={() => handleRedirection('clientes', 'crear')}
            >
              <ListItemText primary="Crear"></ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => handleRedirection('clientes', null)}
            >
              <ListItemText primary="Listar"></ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card className="home-container__card">
        <Avatar aria-label="recipe" className="home-card__avatar">
            <HowToRegIcon />
        </Avatar>
        <CardHeader title="Prestadores"/>
        <CardContent>
          <List component="nav">
            <ListItem
              button
              onClick={() => handleRedirection('prestadores', 'crear')}
            >
              <ListItemText primary="Crear"></ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => handleRedirection('prestadores', null)}
            >
              <ListItemText primary="Listar"></ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  </ThemeProvider>
  );
}

export default Home;
