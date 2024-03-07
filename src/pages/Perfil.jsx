import { Expediente } from "../components/expediente"
import "../assets/css/perfil.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Perfil = () => {
  return (
  <> 
    <Expediente></Expediente>
    <div>
      <Typography variant="h4" gutterBottom style={{ textAlign:'center'}}>Carnet De Vacunación</Typography>
    </div>
  </>
  )
}