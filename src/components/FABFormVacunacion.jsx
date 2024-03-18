import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { TextField, Typography, Grid } from '@mui/material';

// Componente compartido para el formulario de vacunación
function VacunacionForm() {
  return (
    <div style={{ maxWidth: '100%', width: '80%', margin: '0 auto' }}>
    <Grid container spacing={1} style={{ padding: '10px' }}>
      {/* Filas de cuadrícula para los elementos del formulario */}
      <Grid item xs={6}>
        <Typography variant="subtitle1" style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '10px' }}>Vacuna Aplicada</Typography>
        <Box
          style={{
            border: '1px solid #000',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
          }}
        >
          <Typography variant="subtitle1">Vacuna Aplicada:</Typography>
          <TextField
            label="Ingrese el Nombre de la Vacuna"
            variant="outlined"
            type="text"
            helperText="ej. Parvovirus Canino"
            fullWidth
          />
          <Typography variant="subtitle1">Cantidad de Dosis:</Typography>
          <TextField label="Ingrese las dosis" variant="outlined" type="number" fullWidth />
        </Box>
      </Grid>

      {/* Fila de la cuadrícula para el refuerzo Aplicado y Dosis */}
      <Grid item xs={6}>
        <Typography variant="subtitle1" style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '10px' }}>Refuerzo Aplicado</Typography>
        <Box
          style={{
            border: '1px solid #000',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
          }}
        >
          <Typography variant="subtitle1" style={{ wordWrap: 'break-word' }}>
            Refuerzo Aplicado:
          </Typography>
          <TextField
            label="Ingrese el Nombre de la Vacuna"
            variant="outlined"
            type="text"
            helperText="ej. Parvovirus Canino"
            fullWidth
          />
          <Typography variant="subtitle1">Cantidad de Dosis:</Typography>
          <TextField label="Ingrese las dosis" variant="outlined" type="number" fullWidth />
        </Box>
      </Grid>
    </Grid>
    </div>
  );
}

const FabFV = ({ onFabClick }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Fab size="medium" color="primary" aria-label="add" onClick={onFabClick}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default function FAB() {
  const [formCounter, setFormCounter] = useState(0);
  const [formList, setFormList] = useState([]);

  const handleFabClick = () => {
    const newFormList = [...formList];
    newFormList.push(<VacunacionForm key={formCounter} />);
    setFormList(newFormList);
    setFormCounter(formCounter + 1);
  };

  return (
    <div style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}>
      
        {formList.map((form, index) => (
          <React.Fragment key={index}>
            {form}
          </React.Fragment>
        ))}
      
      <FabFV onFabClick={handleFabClick} />
    </div>
  );
}