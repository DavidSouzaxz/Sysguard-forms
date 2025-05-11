import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function MyHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna entre aberto e fechado
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(rgba(37, 41, 59, 0.12),rgba(255, 255, 255, 0.1))',
        boxShadow: '0 2px 10px rgba(44, 44, 44, 0.54)',
        backdropFilter: 'blur(5px)',
        height: '80px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginTop: '15px',
          position: 'relative', 
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>

        <div
          style={{
            display: 'flex',
            position: 'absolute',
            alignItems: 'center',
            left: menuOpen ? '4%' : '-50%', // Controla a posição do menu
            transition: '0.5s ease-in-out',
          }}
          id="menu"
        >
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginRight: '20px',
            }}
            onClick={() => navigate('/cadastro-propriedade')}
          >
            Home
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginRight: '20px',
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginRight: '20px',
            }}
          >
            Contact
          </Typography>
        </div>

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            cursor: 'pointer',
            position: 'absolute',
            marginLeft: '2%',
            transform: menuOpen ? 'translateX(230px)' : 'translateX(0)', // Move o texto "SysGuard"
            transition: '0.5s ease-in-out',
          }}
          onClick={() => navigate('/')}
        >
          SysGuard
        </Typography>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Button color="inherit" onClick={() => navigate('/Login')}>
            Login
          </Button>

          <IconButton
            size="large"
            aria-label="conta do usuário"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Sair</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
