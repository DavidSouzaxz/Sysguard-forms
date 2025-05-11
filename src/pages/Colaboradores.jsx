import React from 'react'
import { Container,Button,IconButton } from '@mui/material'
import styles from './css/Colaboradores.module.css'

const Colaboradores = () => {

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      borderRadius: '8px',
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
      <div className={styles.contact}>
        <IconButton 
          aria-label="delete" 
          sx={{ padding: "10px",
            transition: 'background-color 0.3s'
            ,'&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
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
          sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)'} }}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Instagram" className={styles.icon} />
        </IconButton>
      </div>
    </Container>
  )
}

export default Colaboradores