import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './css/Register.module.css';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // Simulação de registro (você pode substituir por uma chamada de API real)
    console.log('Dados registrados:', data);
    alert('Registro realizado com sucesso!');
    navigate('/login'); // Redireciona para a página de login após o regist
    
  };

  return (
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
  );
};

export default Register;