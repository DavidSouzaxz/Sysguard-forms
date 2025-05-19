import React from 'react'

export const isTokenValidat = () => {
  const expiration = localStorage.getItem('token_expiration');
  if(!expiration) return false
  const now = new Date().getTime();
  return now < parseInt(expiration)
}
