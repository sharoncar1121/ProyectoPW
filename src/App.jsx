import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Login } from './pages/Login';
import { Form } from './pages/Form';
import { Registros } from './pages/Registros';
import {Dashboard} from './pages/Dashboard';
import {Perfil} from './pages/Perfil';
import { Navbar } from './components/Navbar';
import BotonGuardar from './components/BotonGuardar';

function App() {
//  const [user, setUser] = useState({
//    username: ''
 // })

  
 // useEffect(() => {
 //   checkAuth();
//    async function checkAuth() {
 //     try {
       // const { data } = await axios(`${import.meta.env.VITE_URL}/api/users`, { withCredentials: true });
 //       setUser({
 //         username: data.username
  //      });
 //     } catch (error) {
 //       console.log(error);
 //     }
 //   }
 // }, []);

  return (
    <>
    <Router>
      <div>
        {window.location.pathname !== '/' && <Navbar />} {/* Condición para mostrar la Navbar */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Dashboard />} />
          <Route path="/registros" element={<Registros />} />
          <Route path="/form" element={<Form />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Boton" element={<BotonGuardar />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
