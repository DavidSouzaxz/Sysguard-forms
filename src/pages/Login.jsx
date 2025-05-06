import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './css/Login.module.css';


export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await fetch('/data/users.json');
    const users = await response.json();

    const user = users.find(
      (u) => u.name === data.name && u.senha === data.password
    );

    if (user) {
      navigate('/dashboard');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
  );
};
