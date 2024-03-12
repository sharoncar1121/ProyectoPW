import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Grid, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Logo from '../assets/Logo.jpeg'

export const Navbar = () => {
  const textColor = '#252E27';
  const colorBoton = '#6AA098'; // Color predeterminado del botón
  const selectedColor = '#181E1C'; // Color para el botón seleccionado
  const selectedTextColor = '#819992'; // Color del texto para el botón seleccionado

  const location = useLocation();

  const isSelected = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none', paddingBottom:'40px' }}>
      <Toolbar>
        {/* Logotipo */}
        <Avatar
          src={Logo}
          alt="Logo"
          style={{ width: 90, height: 90, marginRight: '20px', boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`, }}
        />

        {/* Nombre o Marca */}
        <Typography variant="h4" component="p" style={{ flexGrow: 1, color: textColor, fontWeight: 'bold',  }}>
          Agromercial <br /> El Campo
        </Typography>

        <Grid container justifyContent="space-evenly">
          <Button
            color="inherit"
            component={Link}
            to="/home"
            style={{
              color: isSelected('/home') ? selectedTextColor : textColor,
              background: isSelected('/home') ? selectedColor : colorBoton,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '30px',
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
              flexBasis: '10%',
            }}
          >
            <HomeIcon fontSize="medium" />
            Inicio
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/form"
            style={{
              color: isSelected('/form') ? selectedTextColor : textColor,
              background: isSelected('/form') ? selectedColor : colorBoton,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '30px',
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
              flexBasis: '15%',
            }}
          >
            <AddCircleOutlineIcon fontSize="medium" />
            Nuevo Expediente
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/registros"
            style={{
              color: isSelected('/registros') ? selectedTextColor : textColor,
              background: isSelected('/registros') ? selectedColor : colorBoton,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '30px',
              boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`,
              flexBasis: '12%',
            }}
          >
            <ListAltIcon fontSize="medium" />
            Expedientes
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
