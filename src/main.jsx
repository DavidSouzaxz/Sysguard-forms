import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Login } from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Colaboradores from './pages/Colaboradores.jsx';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route 
        path="/cadastro-propriedade" 
        element={
          <PrivateRoute>
            <CadastroPropriedade />
          </PrivateRoute>} 
        />
        <Route path="/colaboradores" element={<Colaboradores />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
