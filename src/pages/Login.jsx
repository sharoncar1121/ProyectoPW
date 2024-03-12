import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.jpeg'

const temaLogin = createTheme();

export const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensajeValidacion, setMensajeValidacion] = useState('');
  const navigate = useNavigate();

  const user = 'prueba';
  const contrasenia = '1234';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario === user && contrasena === contrasenia) {
      setMensajeValidacion('Usuario validado');
      navigate('/Home')
    } else {
      setMensajeValidacion('Usuario o contraseña incorrectos');
    }
  };

  return (
    <ThemeProvider theme={temaLogin}>
      <Box
        sx={{
          backgroundColor: '#819992',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1 }} src={Logo}
                alt="Logo" style={{boxShadow: `1px 2px 6px 1px rgba(0, 0, 0, 0.4)`, width: 60, height: 60, }}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Ingreso
              </Typography>
              {mensajeValidacion && <Alert severity={mensajeValidacion === 'Usuario validado' ? 'success' : 'error'}>{mensajeValidacion}</Alert>}
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user"
                  label="Usuario"
                  name="usuario"
                  autoComplete="username"
                  autoFocus
                  onChange={(e) => setUsuario(e.target.value)}
                  color="success"
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setContrasena(e.target.value)}
                  color="success"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#70AD5F' }}
                >
                  Ingresar
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}




