import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/Home.module.css';
import MyHeader from '../components/MyHeader';
import { Container, Button, IconButton } from '@mui/material'


const Home = () => {

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiration = localStorage.getItem("token_expiration");

    if (token && expiration) {
      const now = new Date().getTime();

      if (now > Number(expiration)) {
        localStorage.removeItem("token");
        localStorage.removeItem("token_expiration");

        navigate("/login");
      }
    }
  }, [navigate]);




  return (
    <div className={styles.body}>
      <MyHeader />
      <section className={styles.home}>
        <div className={styles.homeTitle}>
          <h1>Bem-vindo ao Sistema <span>Sysguard</span></h1>
        </div>

        <div className={styles.homeSubtitle}>
          <div className={styles.homeDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tempor turpis vitae dignissim. Quisque quis egestas nisl, sed fringilla nibh. Quisque ipsum magna, blandit nec nisl nec, porta bibendum nibh. Mauris vestibulum ultricies metus ut condimentum. Aenean volutpat id lorem at dapibus. Nulla facilisi. Donec tempus, purus sed interdum tempor, ipsum ex iaculis neque, vel pellentesque velit turpis sed risus.</p>
            <button onClick={() => navigate('/registro')}>Acessar o sistema</button>
          </div>
          <div className={styles.home__image_container}>
            <img
              src="./src/images/elemento.png"
              alt="Imagem de Propriedade"
              className={styles.homeimg}
            />
          </div>
        </div>
      </section>
      <section className={styles.home__sobre}>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px'
        }}>
          <div className={styles.title}>
            <h1>Colaboradores</h1>
          </div>
          <div className={styles.description}>
            <p>
              Atualmente a DVD Agency pensou numa solução para organizar e até gerenciar custos/cobranças de suas propriedades por meio de um software web. Por isso, criamos o projeto "Sistema de Cadastro de Propriedades", no qual você pode cadastrar suas propriedades e gerenciar os dados de forma simples e prática. Nosso sistema conta também com um sistema de login, onde você pode acessar suas propriedades de qualquer lugar e a qualquer hora. Fora o sistema de cobranças automatica que facilita a vida de quem aluga suas propriedades, e para o locatário, o sistema de cobranças automatizado notifica sobre a dependencia de pagamento por gmail.
              Se você deseja se tornar um colaborador, entre em contato conosco!
              Estamos sempre abertos a novas ideias e colaborações.</p>
          </div>
          <div className={styles.buttons}>
            <Button variant="contained" onClick={() => navigate("/colaboradores")} sx={{
              background: 'linear-gradient(90deg, #6DA1F9 0%, #3578e5 100%)',
              color: '#fff',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                background: '#fff',
                color: '#6DA1F9',
                boxShadow: '0px 0px 5px #fff'
              },
            }}>Saber mais</Button>
          </div>
        </Container>
      </section>

      <section style={{
        display: 'flex',
        marginTop: '20px',
      }}>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
        }}>
          {/* <div className={styles.title}>
            <h4>Serviços</h4>
          </div> */}
          <div className={styles.servicos}>
            <div className={styles.box__servico}>
              <p>Aonde pode-se cadastrar propriedades para organização de propriedades.</p>
              <hr />
              <h3>Cadastro de propriedades</h3>
              <img src="./src/images/cadastro.png" alt="" />
            </div>
            <div className={styles.box__servico}>
              <p>Aonde pode-se cadastrar propriedades para organização de propriedades.</p>
              <hr />
              <h3>Pesquisa de propriedades</h3>
              <img src="https://img.freepik.com/vetores-gratis/casal-azul-com-lupa-estilo-plano_114360-95.jpg?t=st=1747048169~exp=1747051769~hmac=7ff886785577f7192b8d5d4e4a7b76e53313c24bc0ea49e91c1c99a9c3782320&w=826" alt="" />
            </div>
            <div className={styles.box__servico}>
              <p>Aonde pode-se cadastrar propriedades para organização de propriedades.</p>
              <hr />
              <h3>Pesquisa de propriedades</h3>
              <i className="fa-solid fa-address-card"></i>
            </div>
            <div className={styles.box__servico}>
              <p>Aonde pode-se cadastrar propriedades para organização de propriedades.</p>
              <hr />
              <h3>Pesquisa de propriedades</h3>
              <i className="fa-solid fa-address-card"></i>

            </div>
          </div>
        </Container>
      </section>
      <section className={styles.home__propriedades}>
        <div className={styles.subtitle}>
          <h2>Fique por dentro das suas propriedades</h2>
        </div>

        <Container sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

        }}>
          <div className={`${styles.box__propriedades} ${styles.cascade1}`} onClick={() => navigate('/propriedades')}>
            <img src="https://images.adsttc.com/media/images/5c34/ae9e/08a5/e5fb/0600/0158/newsletter/FEATURE_IMAGE_(1).jpg?1546956437" alt="" />
            <p>Autonomia de negócios</p>
          </div>
          <div className={`${styles.box__propriedades} ${styles.cascade2}`} onClick={() => navigate('/propriedades')}>
            <img src="https://images.adsttc.com/media/images/5cbe/3573/284d/d16b/1100/0170/newsletter/24415PR151116-018D.jpg?1555969378 " alt="" />
            <p>Autonomia de negócios</p>
          </div>
          <div className={`${styles.box__propriedades} ${styles.cascade3}`} onClick={() => navigate('/propriedades')}>
            <img src="https://images.adsttc.com/media/images/5c34/ae9e/08a5/e5fb/0600/0158/newsletter/FEATURE_IMAGE_(1).jpg?1546956437" alt="" />
            <p>Autonomia de negócios</p>
          </div>

        </Container>
      </section>
      <section className={styles.home__formulario}>
        <Container sx={{
          display: 'flex',
          justifyContent: 'start',
          marginBottom: '20px',
          background: 'linear-gradient(200deg, rgba(255, 255, 255, 0.04) , rgba(199, 199, 199, 0.1))',
          gap: '30px',
          padding: '20px',
          borderRadius: '15px',
          alignItems: 'center'
        }}>

          <div className={styles.formulario}>
            <form action="">
              <label htmlFor="Nome">Nome
                <input type="text" placeholder='Nome' />
              </label>
              <label htmlFor="Sobrenome">Sobrenome
                <input type="text" placeholder='Sobrenome' />
              </label>
              <label htmlFor="Cpf">Cpf
                <input type="text" placeholder='Cpf' />
              </label>
              <label htmlFor="Gmail">Gmail
                <input type="text" placeholder='Gmail' />
              </label>
            </form>
          </div>
          <div className={styles.description__forms}>
            <div className={styles.subtitle}>
              <h3>Fale Conosco</h3>
            </div>
            <p>Este formulário serve para clientes que desejam falar com a sysguard, ou seja, clientes que tenham duvias, problemas ou queira falar conosco, envie mensagens por meio de um formulário bem simples e intuitivo de fácil acesso para todos, responderemos o mais rápido possivel. Agradecemos pela compreensão.</p>
            <button>
              Enviar
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
