import '../assets/css/expediente.css';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export const Expediente = () => {
  return (
    <>
    <main>
      <div className="Encabezado-Expediente">
      <Typography variant="h2" gutterBottom>
        Expediente
      </Typography>
      </div>
      
      <div className="Informacion-Expediente">
        <div className="foto-Expediente">
          <img src="https://labyes.com/wp-content/uploads/2020/07/06Jul_LabyesNotaWeb-1024x684.png" alt="imagen-perfil" />
        </div>
        <div className="datos-fila1">
          <h3>Nombre:</h3>
          <h3>Especie:</h3>
          <h3>Fecha de Registro:</h3>
        </div>
        <div className="datos-fila2">
          <h3>Raza:</h3>
          <h3>Color:</h3>
          <h3>Fecha De Nacimiento:</h3>
        </div>
        <div className="datos-fila3">
        <h3>Propietario:</h3>
          <h3>Telefono:</h3>
        </div>
      </div>
      
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color='success'>Editar Expediente</Button>
        </Stack>
    </main>
    </>
  )
}


//aqui va la foto de perfil junto con el boton de editar perfil