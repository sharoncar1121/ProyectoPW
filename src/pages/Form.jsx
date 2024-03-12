import React, { useState } from 'react';
import { FormVacunacion } from '../components/FormVacunacion';
import { RegistrosData } from '../components/RegistrosData';
import { FormDesparasitacion } from '../components/FormDesparasitacion';
import { Typography, Alert } from '@mui/material';
import { Notas } from '../components/Notas';
import BotonGuardar from '../components/BotonGuardar';
import BotonCancelar from '../components/BotonCancelar';

export const Form = () => {
  const [guardadoExitoso, setGuardadoExitoso] = useState(false);

  const handleGuardarCambios = () => {
    // Lógica para guardar cambios
    setGuardadoExitoso(true);

    // Puedes realizar aquí la lógica de guardar datos en tu backend
    // y luego mostrar el mensaje de éxito.

    // Limpiar el mensaje y reiniciar campos después de 5 segundos (ajusta según sea necesario)
    setTimeout(() => {
      setGuardadoExitoso(false);

      // Puedes reiniciar los campos aquí, por ejemplo:
      resetearCampos();
    }, 2000); // Ajusta el tiempo aquí

    // Recargar la página después de limpiar el mensaje y reiniciar los campos
    setTimeout(() => {
      window.location.reload();
    }, 2000); // Ajusta el tiempo aquí para recargar la página después de cierto tiempo
  };



  const handleCancelar = () => {
    // Lógica para cancelar (recargar la página)
    window.location.reload();
  };

  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: '20px', color: '#181E1C', paddingBottom: '50px' }}>
        <Typography variant="h3" fontFamily="Roboto" fontWeight="bold">
          Nuevo Expediente
        </Typography>
      </div>

      <RegistrosData />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}>
        <FormVacunacion />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}>
        <FormDesparasitacion />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '80px', }}>
        <Notas />
      </div>

      {/* Contenedor para el mensaje de guardado exitoso */}
      <div style={{ position: 'relative' }}>
        {/* Mostrar mensaje de guardado exitoso */}
        {guardadoExitoso && (
          <Alert
            variant="filled"
            severity="success"
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '10px',
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
            }}
          >
            ¡Cambios guardados exitosamente!
          </Alert>
        )}
      </div>


      {/* Contenedor de botones en las esquinas superior izquierda y derecha */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',  // Espaciado automático entre los elementos
        alignItems: 'flex-end',         // Alineado en la parte superior
        height: '20vh',
        padding: '10px',                  // Espaciado interno
        paddingLeft: '80px',               // Espaciado a la izquierda
        paddingRight: '80px',
        paddingTop: '20px',              // Espaciado a la derecha
        paddingBottom: '30px'
      }}>
        <BotonCancelar onClick={handleCancelar} />
        <BotonGuardar onClick={handleGuardarCambios} />
      </div>
    </>
  )
}
