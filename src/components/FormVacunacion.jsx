import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Box, Typography, Grid } from '@mui/material';

export const FormVacunacion = () => {
  return (
    <>
      <div style={{ paddingTop: '20px', paddingBottom: '20px', color: '#181E1C' }}>
        <Typography variant="h3" fontFamily="Roboto" fontWeight="bold">
          Carnet de vacunación
        </Typography>
      </div>

      <div style={{ maxWidth: '100%', width: '80%', margin: '0 auto' }}> {/* Contenedor padre con ancho máximo y margen para centrar */}
        <Grid container spacing={1} style={{ padding: '10px',  }}> {/* Grid contenedor con espacio entre elementos y padding */}
        {/* Filas de cuadrícula para los elementos del formulario */}
        <Grid item xs={6}>
        <Typography variant="subtitle1" style={{textAlign:'center', fontWeight: 'bold', paddingTop: '10px'}}>Vacuna Aplicada.</Typography>
        <Box
            style={{
              border: '1px solid #000',
              padding: '10px',
              borderRadius: '8px', // Bordes redondeados uniformes
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <Typography variant="subtitle1">Vacuna Aplicada:</Typography>
            <TextField
              label="Ingrese el Nombre de la Vacuna"
              variant="outlined"
              type="text"
              helperText="ej. Parvovirus Canino"
              fullWidth // Hace que el TextField ocupe todo el ancho
            />
            <Typography variant="subtitle1">Cantidad de Dosis:</Typography>
            <TextField label="Ingrese las dosis" variant="outlined" type="number" fullWidth />
          </Box>
        </Grid>

        {/* Fila de la cuadrícula para Vacuna Aplicada y Dosis */}
        <Grid item xs={6}>
        <Typography variant="subtitle1" style={{textAlign:'center', fontWeight: 'bold', paddingTop: '10px'}}>Refuerzo Aplicado.</Typography>
        <Box
            style={{
              border: '1px solid #000',
              padding: '10px',
              borderRadius: '8px', // Bordes redondeados uniformes
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

        {/* Fila de la cuadrícula de fecha */}
        <Grid item xs={6}>
        <Typography variant="subtitle1" style={{textAlign:'center', fontWeight: 'bold', paddingTop: '10px'}}>Fecha de Tratamiento.</Typography>
        <Box
            style={{
              border: '1px solid #000',
              padding: '10px',
              borderRadius: '8px', // Bordes redondeados uniformes
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <Typography variant="subtitle1">Fecha:</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" />
            </LocalizationProvider>
            <Typography variant="subtitle1">Peso:</Typography>
            <TextField label="Ingrese el Peso" variant="outlined" type="number" helperText="ej. 25.14" />
          </Box>
        </Grid>

        {/* Fila de la cuadrícula para Fecha próxima cita y Nombre Veterinario */}
        <Grid item xs={6}>
        <Typography variant="subtitle1" style={{textAlign:'center', fontWeight: 'bold', paddingTop: '10px'}}>Programar Proxima Cita.</Typography>
          <Box
            style={{
              border: '1px solid #000',
              padding: '10px',
              borderRadius: '8px', // Bordes redondeados uniformes
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <Typography variant="subtitle1">Fecha proxima cita:</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" />
            </LocalizationProvider>
            <Typography variant="subtitle1">Nombre Veterinario:</Typography>
            <TextField label="Ingrese el Nombre" variant="outlined" type="text" helperText="Ej. Jose Ramon Molina" fullWidth />
          </Box>
        </Grid>




        
      </Grid>
      </div>
    </>
  );
};
