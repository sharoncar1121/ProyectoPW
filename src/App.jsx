import { useState, useEffect } from 'react';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Login } from './pages/Login';
import { Form } from './pages/Form';
import { Registros } from './pages/Registros';
import {Dashboard} from './pages/Dashboard'

function App() {
  const [user, setUser] = useState({
    username: ''
  })

  
  useEffect(() => {
    checkAuth();
    async function checkAuth() {
      try {
       // const { data } = await axios(`${import.meta.env.VITE_URL}/api/users`, { withCredentials: true });
        setUser({
          username: data.username
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login iniciarSesion={setUser}/>} />
          <Route path='/Home' element={<Dashboard/>}/>      
          <Route path='/registros' element={<Registros />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
