import './ProductCard.scss'
import {  Button, Card, CardActions, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ListProduct } from '../../interfaces/data.interface';
import {Favorite, FavoriteBorder}  from '@mui/icons-material';

interface props {
  product: ListProduct
}

const ProductCard:React.FC<props> = ({product}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () =>{
      setIsFavorite(!isFavorite);
    }

    const styleCard = {
        maxWidth: 275,
        width: 275,
    }

  return (
    <Card className="card" sx={styleCard}>
        
        <CardMedia
          sx={{ height: 340, maxWidth:275 }}
          image={product.images[0]}
          title={product.name}
          className="card-item-image"
        />

        <IconButton className="favorite-button" onClick={() => toggleFavorite()}>
            {isFavorite ? <Favorite className="favorite-button-color"/> : <FavoriteBorder className=""/>}
        </IconButton>

        <div className="card-percentage-reduce">
            <p>{product.percentage_reduce}%</p>
        </div>

        <CardContent className="card-content">
          <div className="card-grid-content">
              
              <div className="card-flex-content">
                <Typography className='.title-card' noWrap variant='h6'>{product.name}</Typography>
                  
                  <Rating name="size-large" value={product.review_number} size="large" readOnly/>
                
                  <Typography variant='body2'>$ 220 p/semana <br/> o $ 520 p/mes </Typography>
                  
              </div>

              <div className="card-flex-content">
                    <Typography variant='h3'>${product.price - (product.price * (product.percentage_reduce/100))}</Typography>
                    <span>${product.price}</span>
                    <Button variant="contained" color='secondary'  className="buy-button">lo quiero</Button>
              </div>
          </div>
        </CardContent>
        <CardActions></CardActions>
    </Card>
  );
}

export default ProductCard;