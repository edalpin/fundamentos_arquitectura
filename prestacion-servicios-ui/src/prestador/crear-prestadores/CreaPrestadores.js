import React from 'react';
import './CreaPrestadores.css';

// Material design components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ToastServive from 'react-material-toast';

const toast = ToastServive.new({
  place: 'bottomLeft',
  duration:2,
  maxCount:8
});


const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: 10,
    marginBottom: 60,//theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function CreaPrestadores() {

  const onClick = () => {
    const id = toast.success('Usuario Creado');
  }

  const classes = useStyles();
  const [state, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [userTypeId, setTypeId] = React.useState('');

  const handleChangeTypeId = (event) => {
    setTypeId(event.target.value);
  };

  return(
    <form noValidate className="creation-form">
      <Typography component="h1" variant="h5">
        Formulario de Creación de Prestador
      </Typography>
  
      <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Tipo de Identificación</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userTypeId}
            required
            fullWidth
            onChange={handleChangeTypeId}
            >
            <MenuItem value={10}>Cédula</MenuItem>
            <MenuItem value={20}>Pasaporte</MenuItem>
            </Select>
      </FormControl>
  
      <TextField
        variant="outlined"
        margin="normal"
        required
        /*fullWidth*/
        id="userId"
        label="Identificación"
        name="userId"
        autoComplete="userId"
        autoFocus
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        /*fullWidth*/
        name="email"
        label="Correo"
        type="email"
        id="email"
        autoComplete="email"
      />
  
      <TextField
        variant="outlined"
        margin="normal"
        required
        /*fullWidth*/
        name="phone"
        label="Número de Teléfono"
        type="phone"
        id="phone"
        autoComplete="phone"
      /> 

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          required
          fullWidth
          onChange={handleChange}
        >
          <MenuItem value={10}>Disponible</MenuItem>
          <MenuItem value={20}>Ocupado</MenuItem>
          <MenuItem value={30}>Ausente</MenuItem>
        </Select>
      </FormControl>
      
      <Button
        //type="submit"
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Crear Prestador
      </Button>
    </form>
  );
}
  
  export default CreaPrestadores;
  