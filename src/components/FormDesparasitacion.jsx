import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextField, Box, Typography } from '@mui/material'


export const FormDesparasitacion = () => {
  return (

    <>

      <div style={{ textAlign: 'center', paddingTop: '20px', color: '#181E1C', paddingBottom: '20px' }}>
        <Typography variant="h5" fontFamily="Roboto" fontWeight="bold">
          Desparacitacion Externa
        </Typography>
      </div>

      <Box style={{ display: 'flex' }}>

        {/*Div del box que contiene los elementos de Nombre de Veterinario Y Fecha proxima vacunacion */}
        <Box
          style={{
            border: '1px solid #000', padding: '10px',
            width: '200px', // Ajuste para hacer más ancho
            Height: '200px',// maximo alto
            marginTop: '10px', // Mover hacia abajo
            borderRadius: '8px',
          }}>
          <Typography variant='subtitle1'>Fecha Desparasitacion:</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Seleccione la Fecha" />
          </LocalizationProvider>
          <Typography variant='subtitle1'>Fecha proxima cita:</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Seleccione la Fecha" />
          </LocalizationProvider>
          <Typography variant='subtitle1'>Nombre Veterinario:</Typography>
          <TextField
            label='Nombre del Veterinario'
            variant='outlined'
            type='Text'
            helperText='Ej. Jose Ramon Molina'
            style={{ width: '90%' }}
          ></TextField>
        </Box>

      </Box>

    </>
  )
}