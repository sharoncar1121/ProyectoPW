import  {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Typography, TextField, Container, FormControl, NativeSelect} from '@mui/material';


export const Expediente = () => {
  const [nombre, setNombre] = useState(true);
  const [Especie, setEspecie] = useState(true);
  const [fechaRegistro, setFechaRegistro] = useState(true);;
  const [raza, setRaza] = useState('');
  const [color, setColor] = useState('');
  const [fechaNacimiento, setNacimiento] = useState('');
  const [propietario, setPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  
  const [botonPresionado, setBotonPresionado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBotonPresionado(true);
    setNombre(!nombre)
  };

  console.log(nombre)
  return (
  <>
    <main>  
      <div style={{ width: '100%',  overflow: 'auto', color: '#181E1C', borderRadius: '8px', backgroundColor:'#f2f0e6', boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.1)`, paddingBlock:'40px',  marginBottom:'50px'}}>
      <div style={{ paddingTop: '20px', paddingBottom: '50px', color: '#181E1C', textAlign:'center'}}>
        <Typography variant="h3" fontFamily="Roboto" fontWeight="bold"> Expediente </Typography>
      </div>
        <div style={{ width: '20%',  float:'left'}}>
          <img src="https://labyes.com/wp-content/uploads/2020/07/06Jul_LabyesNotaWeb-1024x684.png" alt="imagen-perfil" style={{ borderRadius:'50%',  boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`, width:'200px', height:'200px', border:'5px solid #000', marginInline:'40px'}}/>
        </div>
        
        <div style={{ width: '75%',  float:'left'}}>
          <Typography variant="subtitle1" gutterBottom style={{ width: '4%', height:'80px', float:'left', paddingTop:'10px'}}> Nombre: </Typography>
          <Container style={{ width: '21%',  float:'left', paddingLeft:'3%'}}>
              <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled={nombre} id='nombreMascota'></TextField>
           </Container> 

          <Typography variant="subtitle1" gutterBottom style={{ width: '4%',  height:'80px', float:'left', paddingTop:'10px', marginLeft:'4%'}}> Especie: </Typography>
          <Container style={{ width: '15%',  float:'left', marginLeft:'2%', paddingTop:'10px' }}>
            <FormControl fullWidth>
              <NativeSelect defaultValue={1} inputProps={{ name: 'especie', id: 'uncontrolled-native'}} disabled>
                <option value={1}>Canino</option>
                <option value={2}>Felino</option>
             </NativeSelect>
            </FormControl>
           </Container>

          <Typography variant="subtitle1" gutterBottom style={{ width:'10%',  height:'80px', float:'left', paddingTop:'10px', marginLeft:'4%'}}> Fecha De Registro: </Typography>
          <Container style={{ width: '30%',  float:'left', marginLeft:'17px'}}>
            <LocalizationProvider style={{ width:'100%' }} dateAdapter={AdapterDayjs} >
              <DatePicker label="Seleccione la Fecha" disabled />
            </LocalizationProvider>
           </Container>
        </div>
        
        <div style={{ width: '75%',  float:'left' }}>
          <Typography variant="subtitle1" gutterBottom style={{ width: '4%',  height:'80px', float:'left', paddingTop:'10px'}}> Raza: </Typography>
          <Container style={{ width: '21%',  float:'left', paddingLeft:'3%'}}>
          <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled></TextField>
           </Container> 

          <Typography variant="subtitle1" gutterBottom style={{  width: '4%',  height:'80px', float:'left', paddingTop:'10px', marginLeft:'4%'}}> Color: </Typography>
          <Container style={{width: '21%',  float:'left', paddingLeft:'3%'}}>
              <TextField  style={{ float:'left', width:'190px'}} label='Ejemplo' variant='outlined' type='text' disabled></TextField>
           </Container> 

          <Typography variant="subtitle1" gutterBottom style={{ width: '160px',  float:'left', paddingTop:'10px'}}> Fecha De Nacimiento: </Typography>
          <Container style={{ width: '30%',  float:'left', margin:'0px'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" disabled/>
            </LocalizationProvider>
           </Container>
        </div>
        
        <div style={{ width: '75%',  float:'left', textAlign:'center', justifyContent:'space-around'}}>
          <div style={{ width: '40%',  float:'left'}}>
            <Typography variant="subtitle1" gutterBottom style={{ width: '20%',  height:'80px', float:'left', paddingTop:'10px', marginLeft:'140px'}}> Propietario: </Typography>
            <Container style={{  width: '51%',  float:'left', paddingLeft:'0%'}}>
              <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled></TextField>
            </Container> 
          </div>
          <div style={{ width: '60%',  float:'left'}}>
            <Typography variant="subtitle1" gutterBottom style={{ width: '10%',  height:'80px', float:'left', paddingTop:'10px', marginLeft:'1%'}}> Telefono: </Typography>
            <Container style={{ width: '21%',  float:'left', paddingLeft:'3%'}}>
                <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled></TextField>
            </Container> 
          </div>
        </div>
      </div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" style={{ width: '200px',  marginLeft:'40px', color:'#fff', background:'#000'}} onClick={handleSubmit}> Editar Expediente </Button>
      </Stack>

    </main>
  </>
  )
}

