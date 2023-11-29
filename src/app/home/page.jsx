'use client'
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from './style.css'


const conteudo = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row'
}

const conteudoTexto = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 20px',
  textAlign: 'center',
  gap: '10px',
  width: '50%'
}

const conteudoImg = {
  width: '50%'
}


export default function HomePage() {
  return (
    <Box sx={{
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box className='banner-home'>
        <Typography variant="h1" sx={{
          color: '#FFF'
        }}>Sorvete Artesanal</Typography>
      </Box>
      <Box sx={conteudo}>
        <Box sx={conteudoImg}>
          <img src="/assets/banner-sabores.jpg" alt="" width='100%' />
        </Box>
        <Box sx={conteudoTexto}>
          <Typography variant="h2" fontSize="30px">Nossos Sabores</Typography>
          <Typography>Novos e deliciosos!</Typography>
          <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore itaque quam qui, in culpa nemo rem blanditiis illum laboriosam minima, unde quaerat, earum nam vero quae doloremque reprehenderit non velit?</Typography>
        </Box>
      </Box>
      <Box sx={conteudo}>
        <Box sx={conteudoTexto}>
          <Typography variant="h2" fontSize="30px">Nossos Sabores</Typography>
          <Typography>Novos e deliciosos!</Typography>
          <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore itaque quam qui, in culpa nemo rem blanditiis illum laboriosam minima, unde quaerat, earum nam vero quae doloremque reprehenderit non velit?</Typography>
        </Box>
        <Box sx={conteudoImg}>
          <img src="/assets/eventos-image.jpg" alt="" width='100%' />
        </Box>
      </Box>
      <Box sx={conteudo}>
        <Box sx={conteudoImg}>
          <img src="/assets/sobre-image.jpg" alt="" width='100%' />
        </Box>
        <Box sx={conteudoTexto}>
          <Typography variant="h2" fontSize="30px">Nossos Sabores</Typography>
          <Typography>Novos e deliciosos!</Typography>
          <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore itaque quam qui, in culpa nemo rem blanditiis illum laboriosam minima, unde quaerat, earum nam vero quae doloremque reprehenderit non velit?</Typography>
        </Box>
      </Box>
    </Box>
  );
}