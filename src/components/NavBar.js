import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import styles from '../styles/Navbar.module.scss'

export const NavBar = () => {
  return (
    <>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            top: '25px',
            p: '0 80px',
            position: 'absolute'
        }}>
            <Box
                sx={{
                    width: '150px',
                    height: '75px'
                }}
            >
                <Image src={logo} alt="logo" />
            </Box>
            <Box>
                <ul className={styles.navList}>
                    <li>Main</li>
                    <li>Contacts</li>
                    <li>About Us</li>
                </ul>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 40px',
                        width: '150px',
                        height: '50px',
                        borderRadius: '20px',
                        border: '2px solid #50b054',
                        cursor: 'pointer'
                    }}
                >
                    <Typography
                        sx={{
                            color: '#fff',
                            fontWeight: 700,
                        }}
                    >
                        Trash
                    </Typography>
                    <Typography
                        sx={{
                            color: '#fff',
                            fontWeight: 700,
                        }}
                    >
                        0
                    </Typography>
                </Box>
            </Box>
        </Box>
    </>
  )
}
