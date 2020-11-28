import React from 'react';

import './ListaPrestadores.css';
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

function ListaPrestadores() {

  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);

  const history = useHistory();

  function handleRedirection(module, action, params) {
    const path = action ? `${module}/${action}/${params}` : module;
    history.push(path);
  }

  let users = [
    { name:'Lucía Ferro', 
      userId: 23243243, 
      userTypeId: 'Cédula',  
      email: 'lferro1@gmail.com', 
      phone: 123133, 
      state: 'Disponible',
      acronym: 'LF'},
    { name:'Mariano Lopera', 
      userId: 344232, 
      userTypeId: 'Cédula', 
      email: 'maria_d1@hotmail.com', 
      phone: 5678787, 
      state: 'Ocupado',
      acronym: 'ML'},
    { name:'Lina Isaza', 
      userId: 567245, 
      userTypeId: 'Pasaporte', 
      email: 'anaTo@gmail.com', 
      phone: 6789000, 
      state: 'Ausente',
      acronym: 'LI'}
  ];

  let items = [];

  for (const [index] of users.entries()) {
    items.push(
      <Card className="list-container__card" id= {index} key={index}>
        <CardHeader 
          avatar= {
            <Avatar className="card__avatar">{users[index].acronym}</Avatar>
          }
          title= {users[index].name}/>
        <CardContent>
          <Typography component="p">
            Tipo de Identificación: {users[index].userTypeId}<br/>
            Identificación: {users[index].userId}<br/>
            Correo: {users[index].email}<br/>
            Teléfono: {users[index].phone}<br/>
            Estado: {users[index].state}<br/> 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => handleRedirection('prestadores', 'editar', 1)}>
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
      <h1 className="list-container__title">Prestadores</h1>
        {items}
        <AlertDialog open={dialogIsOpen} onClose={closeDialog} />
    </div>    
  );
}

export default ListaPrestadores;
