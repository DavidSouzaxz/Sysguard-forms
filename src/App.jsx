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
    <Container maxWidth="sm" className='container'>
      <Box sx={{ mt: 4 }} className='box'>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
          Cadastro de Apartamento
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Nome"
              {...register("nome", { required: "Nome é obrigatorio" })}
              error={!!errors.nome}
              helperText={errors.nome?.message}
              fullWidth
              InputLabelProps={{
                sx:{
                  '&.Mui-focused': {
                    color: "#381441"
                  }
                }
              }}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#381441",
                  },
                    input: {
                      color: "#381441",
                    },
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
                  '&.Mui-focused': {
                    color: "#381441"
                  }
                }
              }}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#381441",
                  },
                    input: {
                      color: "#381441",
                    },
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
                  '&.Mui-focused': {
                    color: "#381441"
                  }
                }
              }}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#381441",
                  },
                    input: {
                      color: "#381441",
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
                  '&.Mui-focused': {
                    color: "#381441"
                  }
                }
              }}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#381441",
                  },
                    input: {
                      color: "#381441",
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
                  '&.Mui-focused': {
                    color: "#381441"
                  }
                }
              }}
              {...register("pagamento", { required: "Data do pagamento é obrigatorio" })}
              error={!!errors.pagamento}
              helperText={errors.pagamento?.message}
              fullWidth
              
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#381441",
                  },
                    input: {
                      color: "#381441",
                    },
                },

                
              }}
            />

          <Button type="submit">Cadastrar</Button>

          </Stack>
        </form>
      </Box>
    </Container>
  )
}

export default App
