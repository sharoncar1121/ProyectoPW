import  {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Typography, TextField, Container, FormControl, NativeSelect} from '@mui/material';


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
          <Typography variant="subtitle1" gutterBottom style={{ width: '6%', height:'80px', float:'left', paddingTop:'10px'}}> Nombre: </Typography>
          <Container style={{ width: '21%',  float:'left', padding:'0%'}}>
              <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled></TextField>
           </Container> 

          <Typography variant="subtitle1" gutterBottom style={{ width: '6%',  height:'80px', float:'left', paddingTop:'10px'}}> Especie: </Typography>
          <Container style={{ width: '21%',  float:'left', paddingInlineStart:'0%', paddingTop:'10px'}}>
            <FormControl fullWidth>
              <NativeSelect defaultValue={1} inputProps={{ name: 'especie', id: 'uncontrolled-native',}} disabled>
                <option value={1}>Canino</option>
                <option value={2}>Felino</option>
             </NativeSelect>
            </FormControl>
           </Container>

          <Typography variant="subtitle1" gutterBottom style={{ width: '12%',  height:'80px', float:'left', paddingTop:'10px'}}> Fecha De Registro: </Typography>
          <Container style={{ width: '30%',  float:'left', paddingInlineStart:'1%'}}>
            <LocalizationProvider style={{ width:'100%'}} dateAdapter={AdapterDayjs} >
              <DatePicker label="Seleccione la Fecha" disabled />
            </LocalizationProvider>
           </Container>
        </div>
        
        <div style={{ width: '75%',  float:'left'}}>
          <Typography variant="subtitle1" gutterBottom style={{ width: '4%',  height:'80px', float:'left', paddingTop:'10px'}}> Raza: </Typography>
          <Container style={{ width: '23%',  float:'left'}}>
          <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled></TextField>
           </Container> 

          <Typography variant="subtitle1" gutterBottom style={{ width: '4%',  float:'left', paddingTop:'10px'}}> Color: </Typography>
          <Container style={{ width: '21%',  float:'left', paddingInlineEnd:'2%'}}>
              <TextField  style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled></TextField>
           </Container> 

          <Typography variant="subtitle1" gutterBottom style={{ width: '15%',  float:'left', paddingTop:'10px'}}> Fecha De Nacimiento: </Typography>
          <Container style={{ width: '30%',  float:'left', padding:'0%'}}>
            <LocalizationProvider style={{ width:'100%'}} dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" disabled/>
            </LocalizationProvider>
           </Container>
        </div>
        
        <div style={{ width: '75%',  float:'left', textAlign:'center'}}>
        <Typography variant="subtitle1" gutterBottom style={{ width: '6%',  height:'80px', float:'left', paddingTop:'10px'}}> Propietario: </Typography>
          <Container style={{ width: '21%',  float:'left'}}>
          <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled></TextField>
           </Container> 

          <Typography variant="subtitle1" gutterBottom style={{ width: '4%',  float:'left', paddingTop:'10px'}}> Telefono: </Typography>
          <Container style={{ width: '21%',  float:'left'}}>
              <TextField   label='Ejemplo' variant='outlined' type='text' disabled></TextField>
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

