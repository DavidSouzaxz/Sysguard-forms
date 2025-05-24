import { CircularProgress, Typography, Box } from '@mui/material'
import React from 'react'

const LoadingScreen = () => {
  return (

    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
    >
      <CircularProgress />
      <Typography sx={{
        color: '#fff'
      }}>Carregando...</Typography>
    </Box>
  )
}

export default LoadingScreen