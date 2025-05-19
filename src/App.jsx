import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CadastroProprieadade from './pages/CadastroProprieadade.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Colaboradores from './pages/Colaboradores.jsx';
import Propriedades from './pages/Propriedades.jsx';
import { isTokenValidat } from './api/IsTokenValidat.jsx';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const valid = isTokenValidat();
  return token && valid ? children : <Navigate to="/login" replace />;
};

const App = () => {

  const navigate = useNavigate()


  useEffect(() => {
    const logout = () => {
      
      localStorage.removeItem('token');
      navigate('/login');
    };

    const checkTokenValidity = () => {
      const isValid = isTokenValidat()
      
      if (!isValid) {
        logout()
      }
    }
    checkTokenValidity()

    const intervalId = setInterval(() => {
      checkTokenValidity()
    }, 60 * 60 * 1000)

    return () => clearInterval(intervalId)


  },[navigate])






  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/colaboradores" element={<Colaboradores />} />
      <Route
        path="/propriedades"
        element={
          <PrivateRoute>
            <Propriedades />
          </PrivateRoute>
        }
      />
      <Route
        path="/registro"
        element={
          <PrivateRoute>
            <CadastroProprieadade />
          </PrivateRoute>
        }
      />
    </Routes>

  );
};

export default App;
