import React, { useState } from 'react';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const BotonCancelar = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    // Ejecutar la función proporcionada por el componente padre
    onClick();
    handleClose();
  };

  return (
    <>
      <Button variant="contained" color="error" onClick={handleClickOpen} style={{ backgroundColor: '#F44336',
      boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
      borderRadius: '7px', color: '#F2F3EF', fontWeight: 'bold', marginRight: '10px' }}>
        Cancelar
      </Button>

      {/* Diálogo de confirmación */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs" TransitionComponent={SlideTransition}>
        <DialogTitle style={{ backgroundColor: '#F44336', color: '#F2F3EF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>
            <WarningIcon fontSize="small" style={{ marginRight: '5px' }} />
            ¿Estás seguro?
          </span>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: '#F2F3EF' }}>
          <Typography style={{ marginTop: '10px', fontSize: '16px' }}>
            Al cancelar, se perderán todos los datos ingresados. ¿Deseas continuar?
          </Typography>
        </DialogContent>
        <DialogActions style={{ backgroundColor: '#F2F3EF' }}>
          <Button onClick={handleClose} color="primary" style={{ fontWeight: 'bold' }}>
            No
          </Button>
          <Button onClick={handleConfirm} color="error" style={{ fontWeight: 'bold' }}>
            Sí, cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Animación de transición
const SlideTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default BotonCancelar;
