import React from 'react';
import { FormVacunacion } from '../components/FormVacunacion';
import { RegistrosData } from '../components/RegistrosData';
import { FormDesparasitacion } from '../components/FormDesparasitacion';
import { Typography } from '@mui/material';
import { Notas } from '../components/Notas';


export const Form = () => {
  return (
    <> 
    
    <div style={{ textAlign: 'center', paddingTop: '20px', color: '#181E1C' }}>
        <Typography variant="h2" fontFamily="Roboto" fontWeight="bold">
          Nuevo Expediente
        </Typography>
      </div>
      <RegistrosData></RegistrosData>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}>
      <FormVacunacion />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', paddingTop: '80px', paddingLeft: '240px' }}>
    <FormDesparasitacion />
    </div> 

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', paddingTop: '80px', paddingLeft: '240px' }}>
    <Notas />
    </div> 
    </>
  )
}
