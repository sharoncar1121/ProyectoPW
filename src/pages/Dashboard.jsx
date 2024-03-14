
import { ListaCitas } from "../components/ListaCitas"
import { UltimoExpeCreados } from "../components/UltimoExpeCreados";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export const Dashboard = () => {
  const boxStyles1 = {
    width: '90%', 
    marginLeft: '5%', 
    marginTop: '3vh',
    textAlign: 'center',
    display: 'flex'
  };
  const boxStyles2 = {
    width: '90%',
    marginLeft: '5%',  
    marginTop: '13vh',
    textAlign: 'rigth',
    display: 'flex', 
  };
  const boxStyles3 = {
    width: '50%',
    marginLeft: '2%', 
    textAlign: 'center' 
  };

  return (
    
    <Box >
      <Box sx={boxStyles2}>
        <Typography sx={boxStyles3} variant="h4" gutterBottom> Próximas Citas </Typography>
        <Typography sx={boxStyles3} variant="h4" gutterBottom> Ultimos Expedientes Creados </Typography>
      </Box>
      <Box sx={boxStyles1}>
        <ListaCitas/>
        <UltimoExpeCreados/>
      </Box>
    </Box>
  );
}