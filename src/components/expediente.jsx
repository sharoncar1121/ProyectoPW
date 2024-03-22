import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography, TextField, Container, FormControl, NativeSelect } from '@mui/material';

export const Expediente = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  console.log(id);

  const [nombre, setNombre] = useState(true);
  const [especie, setEspecie] = useState(true);
  const [fechaRegistro, setFechaRegistro] = useState(true);
  const [raza, setRaza] = useState(true);
  const [color, setColor] = useState(true);
  const [fechaNacimiento, setNacimiento] = useState(true);
  const [propietario, setPropietario] = useState(true);
  const [telefono, setTelefono] = useState(true);
  
  const [botonPresionado, setBotonPresionado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBotonPresionado(true);
    setNombre(!nombre);
    setEspecie(!especie);
    setFechaRegistro(!fechaNacimiento);
    setRaza(!raza);
    setColor(!color);
    setNacimiento(!fechaNacimiento);
    setPropietario(!propietario);
    setTelefono(!telefono);
  };

  console.log(nombre);
  
  return (
    <>
      <main>  
        <div style={{ width: '100%', overflow: 'auto', color: '#181E1C', borderRadius: '8px', backgroundColor: '#f2f0e6', boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.1)`, paddingBlock: '40px', marginBottom: '50px' }}>
          <div style={{ paddingTop: '20px', paddingBottom: '50px', color: '#181E1C', textAlign: 'center' }}>
            <Typography variant="h3" fontFamily="Roboto" fontWeight="bold"> Expediente </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img src="https://labyes.com/wp-content/uploads/2020/07/06Jul_LabyesNotaWeb-1024x684.png" alt="imagen-perfil" style={{ borderRadius: '50%', boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`, width: '200px', height: '200px', border: '5px solid #000', marginBottom: '20px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '0 20px' }}>
            <div>
              <Typography variant="subtitle1" gutterBottom style={{ height: '40px', paddingTop: '10px' }}> Nombre: </Typography>
              <TextField label='Ejemplo' variant='outlined' type='text' disabled={nombre} id='nombreMascota' />
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom style={{ height: '40px', paddingTop: '10px' }}> Especie: </Typography>
              <FormControl fullWidth>
                <NativeSelect defaultValue={1} inputProps={{ name: 'especie', id: 'uncontrolled-native' }} disabled={especie}>
                  <option value={1}>Canino</option>
                  <option value={2}>Felino</option>
                </NativeSelect>
              </FormControl>
            </div>
            
            <div>
              <Typography variant="subtitle1" gutterBottom style={{ height: '40px', paddingTop: '10px' }}> Raza: </Typography>
              <TextField label='Ej. Labrador' variant='outlined' type='text' disabled={raza}/>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom style={{ height: '40px', paddingTop: '10px' }}> Color: </Typography>
              <TextField label='Ej. Marron' variant='outlined' type='text' disabled={color}/>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom style={{ height: '40px', paddingTop: '10px' }}> Fecha De Registro: </Typography>
              <TextField variant='outlined' type='date' disabled={fechaRegistro}/>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom style={{ height: '40px', paddingTop: '10px' }}> Fecha De Nacimiento: </Typography>
              <TextField variant='outlined' type='date' disabled={fechaNacimiento}/>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom style={{ height: '40px', paddingTop: '10px' }}> Propietario: </Typography>
              <TextField label='Ej. Jason' variant='outlined' type='text' disabled={propietario}/>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom style={{ height: '40px', paddingTop: '10px' }}> Telefono: </Typography>
              <TextField label='Ej. 9999-9999' variant='outlined' type='text' disabled={telefono}/>
            </div>
          </div>

          <Stack direction="row" spacing={2} style={{ justifyContent: 'center', marginTop: '30px' }}>
            <Button variant="contained" style={{ width: '200px', color: '#fff', background: '#000' }} onClick={handleSubmit}>{nombre ? 'Editar Expediente' : 'Cancelar Edición'}</Button>
          </Stack>
        </div>
      </main>
    </>
  );
}
