import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './css/Register.module.css';
import MyHeader from '../components/MyHeader';
import { Container } from '@mui/material';
import api from '../api/ApiConect';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const registerData = {
      login: data.name,
      password: data.password,
      role: data.role || 'USER',
    }
    try {
      const response = await api.post(`${import.meta.env.VITE_API_URL}/auth/register`, registerData);

      if (response.status === 200) {
        navigate('/Login');
        alert('Registro realizado com sucesso!');
        console.log('Registro:', response.data);
      } else {
        alert('Erro ao registrar, tente novamente!');
      }
    } catch (error) {
      console.error('Erro ao registrar:', error);
      alert('Erro ao registrar, tente novamente!');
    }

    console.log('registerData:', registerData);
  }

  return (
    <div className={styles.body__register}>
      <MyHeader />
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className={styles.container__register}>
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


            <label htmlFor="password" className={styles.label}>
              Password
              <input
                {...register("password", { required: "Senha é obrigatória" })}
                type="password"
                className={styles.input}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </label>

            <label htmlFor="role" className={styles.label}>
              Role
              <select
                {...register("role", {
                  required: "Role é obrigatório",
                })}
                className={styles.input}
              >
                <option value="ADMIN" style={{
                  color: '#999999',
                }}>Admin</option>
                <option value="USER" style={{
                  color: '#999999',
                }}>User</option>
              </select>
              {errors.role && <span>{errors.role.message}</span>}
            </label>

            <button type="submit" className={styles.button}>Registrar</button>
            <p onClick={() => navigate('/Login')} className={styles.register}>
              Já possui conta? Faça login.
            </p>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;