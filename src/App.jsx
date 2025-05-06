import './App.css'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Stack
} from "@mui/material"

function App() {

  const { register, handleSubmit, watch,formState: { errors } } = useForm();
  const [dataType, setDataType] = useState("text")
  
  


  function onSubmit(data) {
    console.log(data)
  }

  return (
    <Container maxWidth="sm" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 , width:"100%", textTransform: "uppercase", color: "#fff", fontSize: "30px"}}>
            Tela administrativa
      </Typography>
      <Box className='box' sx={
        {
          mt: 4,
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          borderRadius: "25px",
          alighItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(rgba(255, 255, 255, 0.11),rgba(255, 255, 255, 0.1))",
          boxShadow: "0 2px 10px rgba(35, 35, 35, 0.54)",
          backdropFilter: "blur(15px)",
        }
      }>
        
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 400 , width:"100%", textTransform: "uppercase", color: "#fff", fontSize: "25px"}}>
              Cadastro de Propriedade
            </Typography>
            <TextField
              label="Nome"
              {...register("nome", { required: "Nome é obrigatorio" })}
              error={!!errors.nome}
              helperText={errors.nome?.message}
              fullWidth
              InputLabelProps={{
                sx:{
                  color: "#fff",
                  '&.Mui-focused': {
                    color: "#101218"
                  }
                }
              }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                  input: {
                    color: "#fff",
                  }
                },
              }}
            />
          
            <TextField
              label ="Gmail"
              {...register("email", { required: "Email é obrigatorio" })}
              error={!!errors.email}
              helperText={errors.gmail?.message}
              fullWidth
              InputLabelProps={{
                sx:{
                  color: "#fff",
                  '&.Mui-focused': {
                    color: "#101218"
                  }
                }
              }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                  input: {
                    color: "#fff",
                  }
                },
              }}
            />
          
            <TextField
              label="Valor do Aluguel"
              {...register("number", { required: "Valor é obrigatorio" })}
              error={!!errors.aluguel}
              helperText={errors.aluguel?.message}
              fullWidth
              InputLabelProps={{
                sx:{
                  color: "#fff",
                  '&.Mui-focused': {
                    color: "#101218"
                  }
                }
              }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                    input: {
                      color: "#fff",
                    },
                },
              }}
            />
          
            <TextField
              label="Apartamento"
              {...register("apartamento", { required: "Endereço do apartamento é obrigatorio" })}
              error={!!errors.apartamento}
              helperText={errors.apartamento?.message}
              fullWidth
              InputLabelProps={{
                sx:{
                  color: "#fff",
                  '&.Mui-focused': {
                    color: "#101218"
                  }
                }
              }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                    input: {
                      color: "#fff",
                    },
                },
              }}
            />

            <TextField
              type={dataType}
              label="Data pagamento"
              onFocus={(e) => !e.target.value && setDataType("date")}
              onBlur={(e) => !e.target.value && setDataType("text")}
              InputLabelProps={{
                shrink: dataType === "date" || !!watch("pagamento"),
                sx:{
                  color: "#fff",
                  '&.Mui-focused': {
                    color: "#101218"
                  }
                }
              }}
              {...register("pagamento", { required: "Data do pagamento é obrigatorio" })}
              error={!!errors.pagamento}
              helperText={errors.pagamento?.message}
              fullWidth
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#101218",
                  },
                  input: {
                    color: "#fff",
                  }
                },
              }}
            />

          <Button type="submit" sx={
            {
              backgroundColor: "#ccc",
              color: "#000",
              "&:hover": {
                backgroundColor: "#101218",
                color: "#fff",
              },
            }
          }>Cadastrar</Button>

          <Button 
            onClick={() => window.history.back()} 
            sx={{
              backgroundColor: "#ccc",
              color: "#000",
              "&:hover": {
                backgroundColor: "#101218",
                color: "#fff",
              }
            }}
          >
            Voltar
          </Button>

          </Stack>
        </form>
      </Box>
    </Container>
  )
}

export default App
