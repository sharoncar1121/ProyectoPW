import  {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Typography, TextField, Container, FormControl, NativeSelect} from '@mui/material';



const DataApi = [
  [
    ['https://www.ngenespanol.com/wp-content/uploads/2023/02/dragon-de-komodo-el-lagarto-mas-grande-del-mundo.jpg', 'Lagarto','14-03-2024'],
    ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Nieve','13-03-2024' , 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ],
    ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Manchas','12-03-2024' , 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Rex','12-03-2024'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Oso','12-03-2024'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Max','12-03-2024'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Leo','12-03-2024'],
    ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Garfield','12-03-2024', 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Sony','12-03-2024'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Spy','12-03-2024'],
    ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijJuisnRc0CoMe8S4vCd4khXkefl6wj3P5gfdmnDSOcP_lY5Sbr_B6enB5DlX9J6M--M&usqp=CAU', 'Jack','12-03-2024'],
    ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Sol','12-03-2024', 'Exotico', 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ],
    ['https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg', 'Luna', '12-03-2024', 'canino', 'Persa', 'Blanco','12-03-2010', 'Luis Cardona', '33481474' ]
  ]
  
]


export const Expediente = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  console.log(id)

  const [nombre, setNombre] = useState(true);
  const [especie, setEspecie] = useState(true);
  const [fechaRegistro, setFechaRegistro] = useState(true);
  const [raza, setRaza] = useState(true);
  const [color, setColor] = useState(true);
  const [fechaNacimiento, setNacimiento] = useState(true);
  const [propietario, setPropietario] = useState(true);
  const [telefono, setTelefono] = useState(true);
  
  const [botonPresionado, setBotonPresionado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBotonPresionado(true);
    setNombre(!nombre)
    setEspecie(!especie)
    setFechaRegistro(!fechaNacimiento)
    setRaza(!raza)
    setColor(!color)
    setNacimiento(!fechaNacimiento)
    setPropietario(!propietario)
    setTelefono(!telefono)
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
              <NativeSelect defaultValue={1} inputProps={{ name: 'especie', id: 'uncontrolled-native'}} disabled={especie}>
                <option value={1}>Canino</option>
                <option value={2}>Felino</option>
             </NativeSelect>
            </FormControl>
           </Container>

          <Typography variant="subtitle1" gutterBottom style={{ width:'10%',  height:'80px', float:'left', paddingTop:'10px', marginLeft:'4%'}}> Fecha De Registro: </Typography>
          <Container style={{ width: '30%',  float:'left', marginLeft:'17px'}}>
            <LocalizationProvider style={{ width:'100%' }} dateAdapter={AdapterDayjs} >
              <DatePicker label="Seleccione la Fecha" disabled={fechaRegistro} />
            </LocalizationProvider>
           </Container>
        </div>
        
        <div style={{ width: '75%',  float:'left' }}>
          <Typography variant="subtitle1" gutterBottom style={{ width: '4%',  height:'80px', float:'left', paddingTop:'10px'}}> Raza: </Typography>
          <Container style={{ width: '21%',  float:'left', paddingLeft:'3%'}}>
          <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled={raza}></TextField>
           </Container> 

          <Typography variant="subtitle1" gutterBottom style={{  width: '4%',  height:'80px', float:'left', paddingTop:'10px', marginLeft:'4%'}}> Color: </Typography>
          <Container style={{width: '21%',  float:'left', paddingLeft:'3%'}}>
              <TextField  style={{ float:'left', width:'190px'}} label='Ejemplo' variant='outlined' type='text' disabled={color}></TextField>
           </Container> 

          <Typography variant="subtitle1" gutterBottom style={{ width: '160px',  float:'left', paddingTop:'10px'}}> Fecha De Nacimiento: </Typography>
          <Container style={{ width: '30%',  float:'left', margin:'0px'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" disabled={fechaNacimiento}/>
            </LocalizationProvider>
           </Container>
        </div>
        
        <div style={{ width: '75%',  float:'left', textAlign:'center', justifyContent:'space-around'}}>
          <div style={{ width: '40%',  float:'left'}}>
            <Typography variant="subtitle1" gutterBottom style={{ width: '20%',  height:'80px', float:'left', paddingTop:'10px', marginLeft:'140px'}}> Propietario: </Typography>
            <Container style={{  width: '51%',  float:'left', paddingLeft:'0%'}}>
              <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled={propietario}></TextField>
            </Container> 
          </div>
          <div style={{ width: '60%',  float:'left'}}>
            <Typography variant="subtitle1" gutterBottom style={{ width: '10%',  height:'80px', float:'left', paddingTop:'10px', marginLeft:'1%'}}> Telefono: </Typography>
            <Container style={{ width: '21%',  float:'left', paddingLeft:'3%'}}>
                <TextField style={{ float:'left', width:'270px'}} label='Ejemplo' variant='outlined' type='text' disabled={telefono}></TextField>
            </Container> 
          </div>
        </div>
      </div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" style={{ width: '200px',  marginLeft:'40px', color:'#fff', background:'#000'}} onClick={handleSubmit}>{nombre ? 'Editar Expediente' : 'Cancelar Edición'}  </Button>
      </Stack>

    </main>
  </>
  )
}

