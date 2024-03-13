
import { ListaCitas } from "../components/ListaCitas"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export const Dashboard = () => {
  const boxStyles = {
    width: '45%', 
    marginLeft: '2%', 
    marginTop: '20vh',
    textAlign: 'center' 
  };

  return (
    
    <Box sx={boxStyles}>
      <Typography variant="h4" gutterBottom>
        Próximas Citas 
      </Typography>
      <ListaCitas />
    </Box>
  );
}