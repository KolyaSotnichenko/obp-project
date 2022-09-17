import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <Box sx={{
        position: 'relative',
        ':before': {
            content: '""',
            position: 'absolute',
            background: 'rgba(0, 0, 0, 20%)',
            width: '100%',
            height: '100vh',
        }
    }}>
        <NavBar />
        <Box>
            <video autoPlay muted loop style={{width: '100%', height: '100vh', objectFit: 'cover'}}>
                <source src='./videobg.mp4' type="video/mp4" />
            </video>
        </Box>
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%)'
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
            }}>
                <Typography
                    sx={{
                        color: '#fff',
                        fontSize: '48px',
                    }}
                >
                    OBP Project
                </Typography>
                <Typography
                    sx={{
                        color: '#fff'
                    }}
                >
                    SHop info bvwbvwbviwnvoiwenviowenviwonvw
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}
