import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextField, Box, Typography } from '@mui/material'


export const FormVacunacion = () => {
  return (
    <>
      <div style={{ paddingTop: '20px',paddingBottom: '20px', color: '#181E1C' }}>
        <Typography variant="h5" fontFamily="Roboto" fontWeight="bold">
          Carnet de vacunacion
        </Typography>
      </div>

      <Box style={{ display: 'flex' }}>
        {/*Div del box que contiene los elementos de FECHA Y PESO */}

        <Box
          style={{
            border: '1px solid #000', padding: '10px',
            width: '200px', // Ajuste para hacer más ancho
            maxHeight: '200px',// maximo alto
            marginTop: '10px', // Mover hacia abajo
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
          }}>
          <Typography variant='subtitle1'>Fecha:</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Seleccione la Fecha" />
          </LocalizationProvider>
          <Typography variant='subtitle1'>Peso:</Typography>
          <TextField
            label='Ingrese el Peso'
            variant='outlined'
            type='number'
            helperText='ej. 25.14'
          ></TextField>
        </Box>


        {/*Div del box que contiene los elementos de VACUNA Y DOSIS */}

        <Box style={{
          border: '1px solid #000', padding: '10px',
          width: '260px', // Ajuste para hacer más ancho
          maxHeight: '200px',// maximo alto
          marginTop: '10px', // Mover hacia abajo
        }}>
          <Typography variant='subtitle1'> Vacuna Aplicada:</Typography>
          <TextField
            label='Ingrese el Nombre de la Vacuna'
            variant='outlined'
            type='text'
            helperText='ej. Parvovirus Canino'
            style={{ width: '100%' }}
          ></TextField>
          <Typography variant='subtitle1'>Cantidad de Dosis:</Typography>
          <TextField
            label='Ingrese las dosis'
            variant='outlined'
            type='number'
          ></TextField>
        </Box>

        {/*Div del box que contiene los elementos de REFUERZO Y DOSIS */}
        <Box style={{
          border: '1px solid #000', padding: '10px',
          width: '260px', // Ajuste para hacer más ancho
          maxHeight: '200px',// maximo alto
          marginTop: '10px', // Mover hacia abajo
        }}>
          <Typography variant='subtitle1' style={{ wordWrap: 'break-word' }}> Refuerzo Aplicado:</Typography>
          <TextField
            label='Ingrese el Nombre de la Vacuna'
            variant='outlined'
            type='text'
            helperText='ej. Parvovirus Canino'
            style={{ width: '100%' }}
          ></TextField>
          <Typography variant='subtitle1'>Cantidad de Dosis:</Typography>
          <TextField
            label='Ingrese las dosis'
            variant='outlined'
            type='number'
          ></TextField>
        </Box>

        {/*Div del box que contiene los elementos de Nombre de Veterinario Y Fecha proxima vacunacion */}
        <Box
          style={{
            border: '1px solid #000', padding: '10px',
            width: '220px', // Ajuste para hacer más ancho
            maxHeight: '200px',// maximo alto
            marginTop: '10px', // Mover hacia abajo
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
          }}>
          <Typography variant='subtitle1'>Fecha proxima cita:</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Seleccione la Fecha" />
          </LocalizationProvider>
          <Typography variant='subtitle1'>Nombre Veterinario:</Typography>
          <TextField
            label='Ej. Jose Ramon Molina'
            variant='outlined'
            type='number'
            helperText='Ej. Jose Ramon Molina'
            style={{ width: '90%',  }}
          ></TextField>
        </Box>

      </Box>

    </>
  )
}