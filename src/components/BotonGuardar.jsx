import React from 'react';
import Button from '@mui/material/Button';

const BotonGuardar = ({ onClick, disabled }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: '#70AD5F', boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`, borderRadius: '7px', color: '#252E27', fontWeight: 'bold'}}
    >
      Guardar
    </Button>
  );
}

export default BotonGuardar;
