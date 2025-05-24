import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../css/CadastroProprieadade.module.css"

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Stack
} from "@mui/material"
import { Error } from "@mui/icons-material";

const CadastroProprieadade = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [dataType, setDataType] = useState("text")
  


  const cadastrar = async (payload) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/propriedades/empresa/{empresaId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      })
      if (!response.ok) {
        const erro = await response.json();
        console.error("Erro da API:", erro);
      }

      
      alert('Cadastro feito com sucesso')
    } catch (error) {
      console.error(error)
    }
  }

  function onSubmit(data) {
    const payload = {
      nome: data.nome,
      endereco: data.endereco,
      gmail: data.gmail,
      valorJuros: parseFloat(data.valorJuros),
      valorMulta: parseFloat(data.valorMulta),
      valorAluguel: parseFloat(data.valorAluguel),
      dataVencimento: data.dataVencimento
    };
    cadastrar(payload)
  }

  return (
    <Container maxWidth="sm" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, width: "100%", textTransform: "uppercase", color: "#fff", fontSize: "30px" }}>
        Tela administrativa
      </Typography>
      <Box className={styles.box} sx={
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
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 400, width: "100%", textTransform: "uppercase", color: "#fff", fontSize: "25px" }}>
              Cadastro de Propriedade
            </Typography>
            <TextField
              label="Nome"
              {...register("nome", { required: "Nome é obrigatorio" })}
              error={!!errors.nome}
              helperText={errors.nome?.message}
              fullWidth
              InputLabelProps={{
                sx: {
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
              label="Endereço"
              {...register("endereco", { required: "Endereco é obrigatorio" })}
              error={!!errors.endereco}
              helperText={errors.endereco?.message}
              fullWidth
              InputLabelProps={{
                sx: {
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
              label="Gmail"
              {...register("gmail", { required: "Gmail é obrigatorio" })}
              error={!!errors.email}
              helperText={errors.gmail?.message}
              fullWidth
              InputLabelProps={{
                sx: {
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
              {...register("valorAluguel", { required: "Valor é obrigatorio" })}
              error={!!errors.aluguel}
              helperText={errors.aluguel?.message}
              fullWidth
              InputLabelProps={{
                sx: {
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
              label="Multa em %"
              {...register("valorMulta", { required: "Valor da multa é obrigatorio" })}
              error={!!errors.multa}
              helperText={errors.multa?.message}
              fullWidth
              InputLabelProps={{
                sx: {
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
              label="Juros diário"
              {...register("valorJuros", { required: "Valor do juros é obrigatorio" })}
              error={!!errors.juros}
              helperText={errors.juros?.message}
              fullWidth
              InputLabelProps={{
                sx: {
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
                shrink: dataType === "date" || !!watch("dataVencimento"),
                sx: {
                  color: "#fff",
                  '&.Mui-focused': {
                    color: "#101218"
                  }
                }
              }}
              {...register("dataVencimento", { required: "Data do pagamento é obrigatorio" })}
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

export default CadastroProprieadade;
