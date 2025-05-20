import React, { useState } from 'react'
import { Button } from '@mui/material'
import styles from './css/Propriedade.module.css'
import MyHeader from '../components/MyHeader'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Propriedades = () => {
  const [ativo, setAtivo] = useState(false);
  const [propriedades, setPropriedades] = useState([])
  const navigate = useNavigate()
  const [selecionado,setSelecionado] = useState(false)

  const select = (id) => {
    
    setSelecionado(id=== selecionado ? null : id)
    console.log(id)
  }

  const handleClick = () => {
    setAtivo((prev) => !prev);
    
  };

  useEffect(() => {
    const fetchPropriedades = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/propriedades`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        
        setPropriedades(response.data)
      } catch (error) {
        console.error('Erro ao buscar propriedades:', error)
      }
    }
    fetchPropriedades()
  }, [])


  
  const listar = async () =>{
    try{
      const token = localStorage.getItem('token')
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/propriedades`,{
        headers:{
          Authorization: `Bearer ${token}`,
        },
      })
      setPropriedades(response.data)
    }catch(error){
      console.error('Erro ao listar propriedades: ', error)
    }
  }

  const deletar = async() =>{
    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/propriedades/${selecionado}`,{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${localStorage.getItem('token')}`
        }
      })
      if(!response.ok) throw new Error("Erro ao excluir");

      setSelecionado(null)
      listar()
    }catch(err){
      console.error(err)
      alert('Erro ao excluir a propriedade')
    }

  }

  return (
    <div className={styles.body__propriedades}>
      <MyHeader />
      <section  className={styles.container__propriedades}>
        <div className='message' style={{
          color: 'white',
          position: 'fixed',
          top: '50%',
          left: '45%',
          display: Array.isArray(propriedades.data) && propriedades.data.length >0 ? 'none' : 'block'
        }}>Propriedades
        </div>

          {Array.isArray(propriedades.data) && propriedades.data.map((prop) => (
            <div 
              className={selecionado === prop.id ? `${styles.container__box} ${styles.container__box__active}` : styles.container__box} 
              key={prop.id} 
              onClick={() => select(prop.id)}
              
            >
              <div className={styles.box__image}>
                <img
                  src="https://images.adsttc.com/media/images/5c34/ae9e/08a5/e5fb/0600/0158/newsletter/FEATURE_IMAGE_(1).jpg?1546956437"
                  alt={prop.nome}
                />
              </div>
              <div className={styles.box__title}>
                <h2>{prop.nome}</h2>
              </div>
              <div className={styles.box__subtitle}>
                <hr />
                <p>{prop.endereco}</p>
              </div>
            </div>
          ))}

        



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
            background: '#0D1117',
            border: ativo ? '2px solid #fff' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            boxShadow: 3,
            transition: 'top 0.3s, display 0s',
            zIndex: 9,
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
          }}
          className={styles.opcao__button}
        ><i className="fa-solid fa-list"></i></Button>
        <Button
          onClick={deletar} 
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
            background: '#0D1117',
            border: ativo ? '2px solid #fff' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '19px',
            boxShadow: 3,
            transition: 'top 0.4s, display 0s',
            zIndex: 8,
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
          }}
          className={styles.opcao__button}
        ><i className="fa-solid fa-trash"></i></Button>
        <Button
          sx={{
            position: 'fixed',
            display: 'flex',
            color: '#fff',
            background: '#0D1117',
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
            fontSize: '19px',
            boxShadow: 3,
            transition: 'top 0.5s, display 0s',
            zIndex: 7,
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
          }}
          className={styles.opcao__button} onClick={() => navigate('/registro')}
        ><i className="fa-solid fa-pencil"></i></Button>
      </section>
    </div>
  )
}

export default Propriedades