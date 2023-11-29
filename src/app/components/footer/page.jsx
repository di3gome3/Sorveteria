import { Box, Typography } from "@mui/material";
import React from "react";




export default function FooterPage() {
    return (
        <Box sx={{
            width: '100%',
            bgcolor: '#000'
        }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '0 auto',
                width: '80%',
                justifyContent: 'center', 
                alignItens: 'center',
                padding: '20px',
                color: '#FFF'
            }}>
                <Box sx={{
                    width: '25%'
                }}>
                    <img src="/assets/logo.png" alt="" width='120px'/>
                </Box>
                <Box sx={{
                    width: '25%'
                }}>
                    <Typography>ENDEREÇO</Typography>
                    <Typography>Av. Bernadino de Campos, nº 98, São Paulo Sp 12345-678</Typography>
                </Box>
                <Box sx={{
                    width: '25%'
                }}>
                    <Typography>CONTATO</Typography>
                    <Typography>info@mmeusite.com <br/> Tel: (11) 3456-7890</Typography>
                </Box>
                <Box sx={{
                    width: '25%'
                }}>
                    <Typography>HORÁRIOS</Typography>
                    <Typography>AEBERTO TODOS OS DIAS</Typography>
                </Box>
            </Box>
        </Box>
    )
}