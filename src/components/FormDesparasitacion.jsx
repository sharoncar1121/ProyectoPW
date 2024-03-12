import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Box, Typography, Grid } from '@mui/material';

export const FormDesparasitacion = () => {
  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: '20px', color: '#181E1C', paddingBottom: '20px' }}>
        <Typography variant="h3" fontFamily="Roboto" fontWeight="bold">
          Desparasitación Externa
        </Typography>
      </div>

      <div style={{ maxWidth: '100%', width: '80%', margin: '0 auto' }}> {/* Contenedor padre con ancho máximo y margen para centrar */}
      <Grid container spacing={1} style={{ padding: '10px' }}> {/* Grid contenedor con espacio entre elementos y padding */}
        {/* Fila para Fecha Desparasitación y Nombre del Desparasitante */}
        <Grid item xs={6}>
          <Box
            style={{
              border: '1px solid #000',
              padding: '10px',
              borderRadius: '8px', // Bordes redondeados uniformes
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <Typography variant="subtitle1">Fecha Desparasitacion:</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" />
            </LocalizationProvider>
            <Typography variant="subtitle1">Nombre del Desparasitante:</Typography>
            <TextField
              label="Ingrese el nombre del Desparasitante"
              variant="outlined"
              type="text"
              helperText="Ej. Nexgard"
              fullWidth // Ocupa todo el ancho disponible
            />
          </Box>
        </Grid>

        {/* Fila para Cantidad y Fecha próxima cita */}
        <Grid item xs={6}>
          <Box
            style={{
              border: '1px solid #000',
              padding: '10px',
              borderRadius: '8px', // Bordes redondeados uniformes
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <Typography variant="subtitle1">Cantidad:</Typography>
            <TextField label="Ingrese la cantidad" variant="outlined" type="number" helperText="Ej. 1 comprimido" fullWidth />
            <Typography variant="subtitle1">Fecha proxima cita:</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" />
            </LocalizationProvider>
          </Box>
        </Grid>

        {/* Fila para Nombre del Veterinario */}
        <Grid item xs={12}>
          <Box
            style={{
              border: '1px solid #000',
              padding: '10px',
              borderRadius: '8px', // Bordes redondeados uniformes
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <Typography variant="subtitle1">Nombre Veterinario:</Typography>
            <TextField label="Ingrese el Nombre" variant="outlined" type="text" helperText="Ej. Jose Ramon Molina" fullWidth />
          </Box>
        </Grid>
      </Grid>
      </div>
    </>
  );
};
