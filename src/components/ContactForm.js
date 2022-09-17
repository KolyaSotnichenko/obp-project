import React from 'react'
import {Paper, Typography, Input, InputLabel, FormControl, Button} from '@mui/material';
import { Box } from '@mui/system';

export const ContactForm = () => {
  return (
    <>
        <Paper elevation={8} sx={{
            width: '400px',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '50px',
                textAlign: 'center'
            }}>
                <Box>
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: '24px',
                    }}>
                        Contact Form
                    </Typography>
                </Box>
                <Box>
                    <FormControl>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input sx={{width: '300px'}} id="name" aria-describedby="my-helper-text" />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <InputLabel htmlFor="phone">Phone</InputLabel>
                        <Input sx={{width: '300px'}} id="phone" type='tel' aria-describedby="my-helper-text" />
                    </FormControl>
                </Box>
                <Button>Call me</Button>
            </Box>
        </Paper>
    </>
  )
}
