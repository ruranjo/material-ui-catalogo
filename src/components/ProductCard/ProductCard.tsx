import './ProductCard.scss'
import {  Button, Card, CardActions, CardContent, CardMedia, IconButton, Rating } from '@mui/material';
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
    }

  return (
    <Card className="card" sx={styleCard}>
        
        <CardMedia
          sx={{ height: 340 }}
          image={product.images[0]}
          title={product.name}
          className="card-item-image"
        />

        <IconButton className="favorite-button" onClick={() => toggleFavorite()}>
            {isFavorite ? <Favorite className="favorite-button-color"/> : <FavoriteBorder className="favorite-color-solid"/>}
        </IconButton>

        <div className="card-percentage-reduce">
            <p>{product.percentage_reduce}%</p>
        </div>

        <CardContent className="card-custom-container">
          <div className="card-custom-grid">
              <div className="card-custom-flex">
                  <h4 className="title-item-card" title={product.name}>{product.name}</h4>
                  <div>
                    <Rating  className="star-color" name="read-only" value={product.review_number} readOnly />
                  </div>
                  <div className="list-style-none card-item-text-date">
                        <p>$ 120 p/semana <br/> o $ 520 p/mes </p>
                  </div>
              </div>
              <div className="card-custom-flex ">
                    <h3>${"hola"}</h3>
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