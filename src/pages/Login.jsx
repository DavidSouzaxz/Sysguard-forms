import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './css/Login.module.css';
import MyHeader from '../components/MyHeader';
import { Container } from '@mui/material';
import api from '../api/ApiConect';


export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  

  const handleLogin = async (data) => {
    const loginData = {
    login: data.name,
    password: data.password
    }
    try {
      const response = await api.post(`${import.meta.env.VITE_API_URL}/auth/login`, loginData);

      
    
      const token = response.data.token;
      
      if (!token) {
        alert('Erro ao fazer login, verifique suas credenciais!');  
        return;
      }

      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
      navigate('/cadastro-propriedade');
      console.log(token)
    }catch (error) {
        
        console.error('Erro ao fazer login:', error);
    }
    
    console.log('loginData:', loginData);
  }
  

  return (
    <Container>
      <MyHeader />
      <div className={styles.container}>
        
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
          <label htmlFor="username" className={styles.label}>Username
          <input {...register("name", { required: true })} className={styles.input} />
          {errors.name && <span>Digite seu nome</span>}
          </label>

          <label htmlFor="password" className={styles.label}>Password
          <input {...register("password", { required: true })} type="password" className={styles.input}/>
          {errors.password && <span>Digite sua senha</span>}
          </label>

          <button type="submit">Entrar</button>
          <p onClick={() => navigate('/Register')} className={styles.register}>Não possui conta? Registre-se.</p>
        </form>
      </div>
    </Container> 
  );
};
export default Login;