import { Expediente } from "../components/expediente"
import "../assets/css/perfil.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Perfil = () => {
  return (
    <> 
    <Expediente></Expediente>
    <div>
    <Typography variant="h2" gutterBottom>
        Carnet De Vacunación
      </Typography>
    </div>
    </>
  )
}

