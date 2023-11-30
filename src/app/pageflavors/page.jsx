import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./style.css";



const cardStyle = {
    width: '400px',
    height: '300px',
    maxheight: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 20px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    borderRadius: '5px'
}

const cardText = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}
export default function AboutPage() {
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="banner-flavors">
        <Typography
          variant="h1"
          sx={{
            color: "#FFF",
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.58)'
          }}
        >
          NOSSOS SABORES
        </Typography>
      </Box>
    {/*CRIANDO OS CARDS DE SABORES*/}
      <Box sx={{
        margin: '0 auto',
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '40px 20px',
        gap: '20px'
      }}>
        <Box sx={cardStyle}>
            <img src="/assets/sabor-cookies-avela.png" alt="" width="180px"/>
            <Box sx={cardText}>
                <Typography variant="h3" fontSize='18px' fontWeight='bolder'>Sorvete de Cookies de Avelâ</Typography>
                <Typography variant="p" fontSize='15px'>Um delicioso sorvete com pedaços de Avelã</Typography>
            </Box>
        </Box>
        <Box sx={cardStyle}>
            <img src="/assets/sabor-oreo.png" alt="" width="200px"/>
            <Box sx={cardText}>
                <Typography variant="h3" fontSize='18px' fontWeight='bolder'>Sorvete de Cookies de Avelâ</Typography>
                <Typography variant="p" fontSize='15px'>Um delicioso sorvete com pedaços de Avelã</Typography>
            </Box>
        </Box>
        <Box sx={cardStyle}>
            <img src="/assets/sabor-pistache.png" alt="" width="160px"/>
            <Box sx={cardText}>
                <Typography variant="h3" fontSize='18px' fontWeight='bolder'>Sorvete de Cookies de Avelâ</Typography>
                <Typography variant="p" fontSize='15px'>Um delicioso sorvete com pedaços de Avelã</Typography>
            </Box>
        </Box>
        <Box sx={cardStyle}>
            <img src="/assets/sorbet-kiwi.png" alt="" width="200px"/>
            <Box sx={cardText}>
                <Typography variant="h3" fontSize='18px' fontWeight='bolder'>Sorvete de Cookies de Avelâ</Typography>
                <Typography variant="p" fontSize='15px'>Um delicioso sorvete com pedaços de Avelã</Typography>
            </Box>
        </Box>
        <Box sx={cardStyle}>
            <img src="/assets/sorbet-limao.png" alt="" width="220px"/>
            <Box sx={cardText}>
                <Typography variant="h3" fontSize='18px' fontWeight='bolder'>Sorvete de Cookies de Avelâ</Typography>
                <Typography variant="p" fontSize='15px'>Um delicioso sorvete com pedaços de Avelã</Typography>
            </Box>
        </Box>
        <Box sx={cardStyle}>
            <img src="/assets/sorbet-morango.png" alt="" width="160px"/>
            <Box sx={cardText}>
                <Typography variant="h3" fontSize='18px' fontWeight='bolder'>Sorvete de Cookies de Avelâ</Typography>
                <Typography variant="p" fontSize='15px'>Um delicioso sorvete com pedaços de Avelã</Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}
