import  {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Typography, TextField, Container} from '@mui/material';


export const Expediente = () => {
  return (
  <>
    <main>
      <div style={{ textAlign: 'center', paddingTop: '20px', color: '#181E1C', margin:'auto'}}>
        <Typography variant="h2" gutterBottom> Expediente </Typography>
      </div>
      
      <div style={{ width: '100%',  overflow: 'auto', color: '#181E1C',  marginBottom:'50px'}}>
        <div style={{ width: '25%',  float:'left'}}>
          <img src="https://labyes.com/wp-content/uploads/2020/07/06Jul_LabyesNotaWeb-1024x684.png" alt="imagen-perfil" style={{ borderRadius:'50%', width:'200px', height:'200px', border:'5px solid #000', marginInline:'40px'}}/>
        </div>
        
        <div style={{ width: '75%',  float:'left'}}>
          <Typography variant="h6" gutterBottom style={{ width: '4%',  float:'left'}}> Nombre: </Typography>
          <Container style={{ width: '21%',  float:'left'}}>
              <TextField   label='Ejemplo' variant='outlined' type='text' disabled></TextField>
           </Container> 

          <Typography variant="h6" gutterBottom style={{ width: '4%',  float:'left'}}> Especie: </Typography>
          <Container style={{ width: '21%',  float:'left'}}>
              <TextField   label='Ejemplo' variant='outlined' type='text'></TextField>
           </Container>

          <Typography variant="h6" gutterBottom style={{ width: '12%',  float:'left'}}> Fecha De Registro: </Typography>
          <Container style={{ width: '30%',  float:'left'}}>
            <LocalizationProvider style={{ width:'100%'}} dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" />
            </LocalizationProvider>
           </Container>
        </div>
        
        <div style={{ width: '75%',  float:'left'}}>
          <Typography variant="h6" gutterBottom style={{ width: '4%',  float:'left'}}> Raza: </Typography>
          <Container style={{ width: '21%',  float:'left'}}>
              <TextField   label='Ejemplo' variant='outlined' type='text'></TextField>
           </Container> 

          <Typography variant="h6" gutterBottom style={{ width: '4%',  float:'left'}}> Color: </Typography>
          <Container style={{ width: '21%',  float:'left'}}>
              <TextField   label='Ejemplo' variant='outlined' type='text'></TextField>
           </Container> 

          <Typography variant="h6" gutterBottom style={{ width: '15%',  float:'left'}}> Fecha De Nacimiento: </Typography>
          <Container style={{ width: '20%',  float:'left'}}>
            <LocalizationProvider style={{ width:'100%'}} dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" />
            </LocalizationProvider>
           </Container>
        </div>
        
        <div style={{ width: '75%',  float:'left', textAlign:'center'}}>
          <Typography variant="h6" gutterBottom style={{ width: '4%',  float:'left'}}> Propietario: </Typography>
          <Container style={{ width: '21%',  float:'left'}}>
              <TextField   label='Ejemplo' variant='outlined' type='text'></TextField>
           </Container> 

          <Typography variant="h6" gutterBottom style={{ width: '4%',  float:'left'}}> Telefono: </Typography>
          <Container style={{ width: '21%',  float:'left'}}>
              <TextField   label='Ejemplo' variant='outlined' type='text'></TextField>
           </Container> 
        </div>
      
      </div>
      
      <Stack direction="row" spacing={2}>
        <Button variant="contained" style={{ width: '200px',  marginLeft:'40px', color:'#fff', background:'#000'}}> Editar Expediente </Button>
      </Stack>

    </main>
  </>
  )
}


//aqui va la foto de perfil junto con el boton de editar perfil