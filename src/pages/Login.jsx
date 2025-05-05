import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';

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
      navigate('/dashboard'); // ✅ redireciona e desmonta Login
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Digite seu nome</span>}

        <label htmlFor="password">Password</label>
        <input {...register("password", { required: true })} type="password" />
        {errors.password && <span>Digite sua senha</span>}

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
