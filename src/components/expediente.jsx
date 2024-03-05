

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


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
          <Typography variant="h6" gutterBottom style={{ width: '25%',  float:'left'}}> Nombre: </Typography>
          <Typography variant="h6" gutterBottom style={{ width: '25%',  float:'left'}}> Especie: </Typography>
          <Typography variant="h6" gutterBottom style={{ width: '25%',  float:'left'}}> Fecha De Registro: </Typography>
        </div>
        
        <div style={{ width: '75%',  float:'left'}}>
          <Typography variant="h6" gutterBottom style={{ width: '25%',  float:'left'}}> Raza: </Typography>
          <Typography variant="h6" gutterBottom style={{ width: '25%',  float:'left'}}> Color: </Typography>
          <Typography variant="h6" gutterBottom style={{ width: '25%',  float:'left'}}> Fecha De Nacimiento: </Typography>
        </div>
        
        <div style={{ width: '75%',  float:'left', textAlign:'center'}}>
          <Typography variant="h6" gutterBottom style={{ width: '25%',  float:'left'}}> Propietario: </Typography>
          <Typography variant="h6" gutterBottom style={{ width: '25%',  float:'left'}}> Telefono: </Typography>
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