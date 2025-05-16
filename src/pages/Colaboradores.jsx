import {useEffect} from 'react'
import { Container, Button, IconButton } from '@mui/material'
import styles from './css/Colaboradores.module.css'
import MyHeader from '../components/MyHeader'
import { useNavigate } from 'react-router-dom'

const Colaboradores = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className={styles.body__colaboradores}>
      <MyHeader />
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
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

        <div className={styles.subtitle}>
          <i class="fa-solid fa-arrow-down"></i>
          <p>Conheça um de nossos colaboradores</p>
          <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <img src="https://avatars.githubusercontent.com/u/187334857?v=4" alt="" />
          </div>
          <div className={styles.card__description}>
            <h3>David Souza</h3>
            <p>Também conhecido como Dvd-coder, David Souza é um desenvolvedor apaixonado por programação que não para de aprender nunca, com apenas 19 anos David já possue amplo conhecimento nas linguagens de programação como Java, C#, Javascript e Python. Atualmente está cursando Ciências da Computação na Estácio de Sá. Tem conhecimento em banco de dados como Mysql, MongoDb, Postgres e Firestone, logo possue aprendizagem com a linguagem sql para BD, seus frameworks de uso diario são React, Angular, SpringBoot e Django, mas sua maior intimidade é com React e Springboot. David se dedicou 100% para criar este software web para ajuda-lo a administrar propriedades do pai, um projeto que de começo serviria apenas para administrar 4 apartamentos agora se tornou um Saas que promete cuidar de varias propriedades de empresas que se cadastrem, ou seja, este software promete substituir cobranças manuais por automaticas sem necessidade de preocupação com vencimentos pois o proprio software já se responsabiliza por isso. David tem um sonho que é se tornar um progamador internacional, trabalhar fora de seu país, ampliando suas ideias e as tornando em realidade em outros lugares, solucionando problemas dificéis com softwares inovadores. </p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={() => navigate(-1)}>Voltar</Button>
          <div className={styles.contact}>

            <IconButton
              aria-label="delete"
              sx={{
                padding: "10px",
                transition: 'background-color 0.3s'
                , '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" className={styles.icon} />
            </IconButton>
            <IconButton
              color='secondary'
              sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" className={styles.icon} />
            </IconButton>
            <IconButton
              aria-label="add an alarm"
              sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Instagram" className={styles.icon} />
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Colaboradores