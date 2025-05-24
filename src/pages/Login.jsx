import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Login.module.css';
import MyHeader from '../components/MyHeader';
import { Container } from '@mui/material';
import api from '../api/ApiConect';


export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();


  const salvarToken = (token) =>{
    localStorage.setItem('token', token);
    
  }



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

      salvarToken(token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      navigate('/');
      console.log(token)
    } catch (error) {

      console.error('Erro ao fazer login:', error);
    }
  }


  return (
    <div className={styles.body__login}>
      <MyHeader />

      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className={styles.container__login}>

          <h1>Login</h1>
          <form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
            <label htmlFor="username" className={styles.label}>Username
              <input {...register("name", { required: true })} className={styles.input} />
              {errors.name && <span>Digite seu nome</span>}
            </label>

            <label htmlFor="password" className={styles.label}>Password
              <input {...register("password", { required: true })} type="password" className={styles.input} />
              {errors.password && <span>Digite sua senha</span>}
            </label>

            <button type="submit">Entrar</button>
            <p onClick={() => navigate('/Register')} className={styles.register}>Não possui conta? Registre-se.</p>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default Login;