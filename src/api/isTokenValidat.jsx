import { jwtDecode } from 'jwt-decode';

export const isTokenValidat = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.log("Token não encontrado");
    return false;
  }

  try {
    const decoded = jwtDecode(token);
    const now = Date.now();
    return decoded.exp*1000 > now;
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return false;
  }
};
