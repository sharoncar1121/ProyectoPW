import React from 'react';
import { FormVacunacion } from '../components/FormVacunacion';
import { FormDesparasitacion } from '../components/FormDesparasitacion';
import { Typography } from '@mui/material';


export const Form = () => {
  return (
    <> 
    <div style={{ textAlign: 'center', paddingTop: '20px', color: '#181E1C' }}>
        <Typography variant="h1" fontFamily="Roboto" fontWeight="bold">
          Formulario
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}>
      <FormVacunacion />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', paddingTop: '80px', paddingLeft: '240px' }}>
    <FormDesparasitacion />
    </div> 
    </>
  )
}
