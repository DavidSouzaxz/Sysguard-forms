import React, { useState } from 'react'
import { Button } from '@mui/material'
import styles from './css/Colaboradores.module.css'

const Propriedades = () => {
  const [ativo, setAtivo] = useState(false);

  const handleClick = () => {
    setAtivo((prev) => !prev);
  };

  return (
    <div className={styles.body}>
      <section >
        <div className='message' style={{
          color: 'white',
        }}>Propriedades
        </div>

        
        <Button
          onClick={handleClick}
          sx={{
            position: 'fixed',
            display: 'flex',
            backgroundColor: '#fff',
            borderRadius: '50%',
            padding: '6px',
            minWidth: '52px',
            width: '53px',
            height: '53px',
            margin: '0px',
            top: '89.9%',
            left: '93%',
            color: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            boxShadow: 3,
            zIndex: 10,
          }}
        >+</Button>

       
        <Button
          sx={{
            position: 'fixed',
            display: 'flex',
            borderRadius: '50%',
            minWidth: '52px',
            width: '52px',
            height: '52px',
            margin: '0px',
            top: ativo ? '80%' : '90%',
            left: '93%',
            color: '#fff',
            border: ativo ? '2px solid #fff' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            boxShadow: 3,
            transition: 'top 0.3s, display 0s',
            zIndex: 9,
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
          }}
          className={styles.opcao__button}
        >+</Button>
        <Button
          sx={{
            position: 'fixed',
            display: 'flex',
            borderRadius: '50%',
            minWidth: '52px',
            width: '52px',
            height: '52px',
            margin: '0px',
            top: ativo ? '72%' : '90%',
            left: '93%',
            color: '#fff',
            border: ativo ? '2px solid #fff' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            boxShadow: 3,
            transition: 'top 0.4s, display 0s',
            zIndex: 8,
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
          }}
          className={styles.opcao__button}
        >+</Button>
        <Button
          sx={{
            position: 'fixed',
            display: 'flex',
            color: '#fff',
            border: ativo ? '2px solid #fff' : 'none',
            borderRadius: '50%',
            minWidth: '52px',
            width: '52px',
            height: '52px',
            margin: '0px',
            top: ativo ? '64%' : '90%',
            left: '93%',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            boxShadow: 3,
            transition: 'top 0.5s, display 0s',
            zIndex: 7,
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
          }}
          className={styles.opcao__button}
        >+</Button>
      </section>
    </div>
  )
}

export default Propriedades