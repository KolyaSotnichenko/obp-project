import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ProductCard = () => {
  return (
    <>
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">Buy</Button>
            </CardActions>
        </Card>
    </>
  )
}
