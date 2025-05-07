import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './css/Register.module.css';
import MyHeader from '../components/MyHeader';
import { Container } from '@mui/material';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log('Dados registrados:', data);
    alert('Registro realizado com sucesso!');
    navigate('/login');
    
  };

  return (
    <Container>
      <MyHeader />
      <div className={styles.container}>
      <h1 className={styles.title}>Registro</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Username
            <input
              {...register("name", { required: "Nome é obrigatório" })}
              className={styles.input}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </label>

          <label htmlFor="email" className={styles.label}>
            Email
            <input
              {...register("email", {
                required: "Email é obrigatório",
                
              })}
              className={styles.input}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>

          <label htmlFor="password" className={styles.label}>
            Password
            <input
              {...register("password", { required: "Senha é obrigatória" })}
              type="password"
              className={styles.input}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </label>

          <button type="submit" className={styles.button}>Registrar</button>
          <p onClick={() => navigate('/Login')} className={styles.register}>
            Já possui conta? Faça login.
          </p>
        </form>
      </div>
    </Container>
  );
};

export default Register;