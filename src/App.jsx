import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CadastroProprieadade from './pages/CadastroProprieadade.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Colaboradores from './pages/Colaboradores.jsx';
import Propriedades from './pages/Propriedades.jsx';
import { isTokenValidat } from './api/IsTokenValidat.jsx';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

const App = () => {
  // Verifica a validade do token ao carregar a aplicação
  if (!isTokenValidat()) {
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
  }

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
