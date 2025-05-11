import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/Home.module.css';
import MyHeader from '../components/MyHeader';
import Colaboradores from './Colaboradores';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.body}> 
      <MyHeader />
      <section className={styles.home}>
        <div className={styles.homeTitle}>
          <h1>Bem-vindo ao Sistema de Cadastro de Propriedades</h1>
        </div>

        <div className={styles.homeSubtitle}>
          <div className={styles.homeDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tempor turpis vitae dignissim. Quisque quis egestas nisl, sed fringilla nibh. Quisque ipsum magna, blandit nec nisl nec, porta bibendum nibh. Mauris vestibulum ultricies metus ut condimentum. Aenean volutpat id lorem at dapibus. Nulla facilisi. Donec tempus, purus sed interdum tempor, ipsum ex iaculis neque, vel pellentesque velit turpis sed risus.</p>
            <button onClick={() => navigate('/login')}>Acessar o sistema</button>
          </div>
          <div className="home__image-container">
            <img
              src="./src/images/elemento.png"
              alt="Imagem de Propriedade"
              className={styles.homeimg}
            />
          </div>
        </div>
      </section>
      <section className={styles.home__sobre}>
        <Colaboradores sx={{
          display: 'flex',
          
          marginTop: '20px',
        }} />
      </section>
    </div>
  );
};

export default Home;
