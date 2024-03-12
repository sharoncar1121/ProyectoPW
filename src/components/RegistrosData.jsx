import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const imageUrl = 'https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-2/24/bxs-dog-64.png';
const imageUrl2 = 'https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-1/24/bxs-cat-64.png';

export const RegistrosData = () => {
  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px', color: '#181E1C' }}>
        <Container style={{ textAlign: 'left', paddingInline: '40px', border: '2px solid #978e75', background: '#dedacd', borderRadius: '6px', boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`, }}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'left', paddingInline: '10px', marginTop: '20px' }}>Tipo</Typography>

          <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', paddingInline: '10px' }}>Especie</Typography>

          <Container style={{ border: '1px solid #b7b7bd', width: '100%', borderRadius: '6px', padding: '4px', margin: '8px' }}>
            <RadioGroup style={{ width: '100%' }} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel
                style={{ width: '25%', margin: '0%', paddingInlineStart: '25%', textAlign: 'center' }}
                value="1"
                control={<Radio />}
                label={
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
                      <div>Canino</div>
                      <img src={imageUrl} alt="icon" style={{ width: '40px', height: '40px', marginLeft: '4px' }} />
                    </div>
                  </>
                }
              />
              <FormControlLabel
                style={{ width: '25%', margin: '0%', paddingInlineStart: '25%', textAlign: 'center' }}
                value="2"
                control={<Radio />}
                label={
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
                      <div>Felino</div>
                      <img src={imageUrl2} alt="icon" style={{ width: '40px', height: '40px', marginLeft: '4px', }} />
                    </div>
                  </>
                }
              />
            </RadioGroup>
          </Container>

          <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', paddingInline: '10px' }}>Sexo</Typography>
          <Container style={{ border: '1px solid #b7b7bd', width: '100%', borderRadius: '6px', padding: '4px', margin: '8px' }}>
            <RadioGroup style={{ width: '100%' }} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group2">
              <FormControlLabel style={{ width: '25%', margin: '0%', paddingInlineStart: '25%' }} value="1" control={<Radio />} label="Macho" />
              <FormControlLabel style={{ width: '25%', margin: '0%', paddingInlineStart: '25%' }} value="2" control={<Radio />} label="Hembra" />
            </RadioGroup>
          </Container>

          <Typography variant="h4" gutterBottom style={{ textAlign: 'left', paddingInline: '10px', marginTop: '50px' }}>Caracteristicas</Typography>

          <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', paddingInline: '12px' }}>Raza</Typography>
          <Container style={{ width: '100%', padding: '4px', margin: '8px' }}>
            <TextField style={{ width: '100%' }} label='Ej:Pastor Aleman' variant='outlined' type='text'></TextField>
          </Container>

          <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', paddingInline: '12px' }}>Color</Typography>
          <Container style={{ width: '100%', padding: '4px', margin: '8px' }}>
            <TextField style={{ width: '100%' }} label='Ej:blanco' variant='outlined' type='text'></TextField>
          </Container>

          <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', paddingInline: '12px' }}>Nombre Del Animalito</Typography>
          <Container style={{ width: '100%', padding: '4px', margin: '8px' }}>
            <TextField style={{ width: '100%' }} label='Ej:Max' variant='outlined' type='text'></TextField>
          </Container>

          <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', paddingInline: '12px' }}>Fecha De Nacimiento</Typography>
          <Container style={{ width: '100%', padding: '4px', margin: '8px' }}>
            <LocalizationProvider style={{ width: '100%' }} dateAdapter={AdapterDayjs}>
              <DatePicker label="Seleccione la Fecha" />
            </LocalizationProvider>
          </Container>

          <Typography variant="h4" gutterBottom style={{ textAlign: 'left', paddingInline: '10px', marginTop: '50px' }}>Señas Particulares</Typography>

          <Container style={{  background: '#F2F3EF', borderRadius: '6px', width: '100%', padding: '4px', margin: '8px', height: '180px' }}>
            <TextField style={{ width: '100%', border: '1px solid #b7b7bd', }} id="filled-multiline-static" variant="filled" rows={6} label="Ej:Lunar negro en la patita derecha" multiline></TextField>
          </Container>

          <Typography variant="h4" gutterBottom style={{ textAlign: 'left', paddingInline: '10px', marginTop: '50px' }}>Datos Personales</Typography>

          <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', paddingInline: '12px' }}>Nombre</Typography>
          <Container style={{ width: '100%', padding: '4px', margin: '8px' }}>
            <TextField style={{ width: '100%' }} label='Ej:Luis Alberto Lopéz Mercado' variant='outlined' type='text'></TextField>
          </Container>

          <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', paddingInline: '12px' }}>Telefono</Typography>
          <Container style={{ width: '100%', padding: '4px', margin: '8px', marginBottom: '40px' }}>
            <TextField style={{ width: '100%' }} label='Ej: 3333-1010' variant='outlined' type='text'></TextField>
          </Container>
        </Container>
      </div>
    </>
  )
}

