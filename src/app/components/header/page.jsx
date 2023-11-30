import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";



export default function Header () {
    return (
      <Box sx={{
        position: "fixed",
        width: '100%',
        bgcolor: 'rgb(249, 219, 121)'
      }}>
        <Box sx={{
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItens: 'center'
        }}>
            <img src="/assets/logo.png" alt="" width="80px"/>
        <ul style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
        listStyleType: 'none',
        padding: 0,
        gap: '30px'
        }}>
          <li>Home</li>
          <li>Sobre</li>
          <li>Sabores</li>
        </ul>
        </Box>
      </Box>
    )
}