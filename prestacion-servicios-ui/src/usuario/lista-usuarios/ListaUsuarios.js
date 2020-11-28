import React from 'react';

import './ListaUsuario.css';
import AlertDialog from '../../alert-dialog/AlertDialog.js';

// Router
import { useHistory } from 'react-router-dom'

// Material design components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

function ListaUsuarios() {

  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);

  const history = useHistory();

  function handleRedirection(module, action, params) {
    const path = action ? `${module}/${action}/${params}` : module;
    history.push(path);
  }

  let users = [
    { name:'Juan Pérez', 
      userId: 672232, 
      userTypeId: 'Cédula',  
      email: 'jo_128@gmail.com', 
      phone: 123133, 
      acronym: 'JP'},
    { name:'Maria Diaz', 
      userId: 344232, 
      userTypeId: 'Cédula', 
      email: 'maria_d1@hotmail.com', 
      phone: 5678787, 
      acronym: 'MD'},
    { name:'Ana Torres', 
      userId: 567245, 
      userTypeId: 'Pasaporte', 
      email: 'anaTo@gmail.com', 
      phone: 6789000, 
      acronym: 'AT'},
    { name:'Luis Calle', 
      userId: 102356, 
      userTypeId: 'cédula', 
      email: 'lcalle@gmail.com', 
      phone: 466577, 
      acronym: 'LC'},
    { name:'Pablo Cortés', 
      userId: 4565767, 
      userTypeId: 'Pasaporte', 
      email: 'pabloc@hotmail.com', 
      phone: 2434343, 
      acronym: 'PC'},
    { name:'Gabriela Mesa', 
      userId: 1987864, 
      userTypeId: 'cédula', 
      email: 'gmesa@gmail.com', 
      phone: 56555, 
      acronym: 'GM'}
  ];

  let items = [];

  for (const [index] of users.entries()) {
    items.push(
      <Card className="list-container__card" id= {index} key={index}>
        <CardHeader 
          avatar= {
            <Avatar className="card__avatara">{users[index].acronym}</Avatar>
          }
          title= {users[index].name}/>
        <CardContent>
          <Typography component="p">
            Tipo de Identificación: {users[index].userTypeId}<br/>
            Identificación: {users[index].userId}<br/>
            Correo: {users[index].email}<br/>
            Teléfono: {users[index].phone}<br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => handleRedirection('usuarios', 'editar', 1)}>
            Editar
          </Button>
          <Button size="small" color="primary" onClick={openDialog}>
            Eliminar
          </Button>
        </CardActions>
      </Card>
    )
  }

  return(
    <div className="list-container">
      <h1 className="list-container__title">Usuarios Registrados</h1>
        {items}
        <AlertDialog open={dialogIsOpen} onClose={closeDialog} />
    </div>    
  );
}

export default ListaUsuarios;
