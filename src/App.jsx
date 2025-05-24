import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CadastroProprieadade from './pages/CadastroProprieadade.jsx';
import { CadastroEmpresas } from './pages/CadastroEmpresas.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Colaboradores from './pages/Colaboradores.jsx';
import Propriedades from './pages/Propriedades.jsx';
import { isTokenValidat } from './api/IsTokenValidat.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        localStorage.removeItem('token');
        navigate('/login');
        return;
      }

      const valid = await isTokenValidat();
      if (!valid) {
        localStorage.removeItem('token');
        navigate('/login');
        return;
      }

      setIsValid(true);
      setLoading(false);
    };

    checkToken();
  }, [navigate]);

  if (loading) return <LoadingScreen />;
  return isValid ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // duração da tela de carregamento (1s)

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (loading) {
    return <LoadingScreen />;
  }

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
      <Route
        path="/registro-empresa"
        element={
          <PrivateRoute>
            <CadastroEmpresas />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
