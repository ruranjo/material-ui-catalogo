import './ProductCard.scss'
import {  Button, Card, CardActions, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ListProduct } from '../../interfaces/data.interface';
import {Favorite, FavoriteBorder}  from '@mui/icons-material';
import { ProductsContext } from '../../context/ProductContext/ProductsContext';
import { ModalProduct } from '..';
import {useLocation, useNavigate } from 'react-router-dom';


interface props {
  product: ListProduct;
  small: boolean;
}

const ProductCard:React.FC<props> = ({product,small}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);
    const location = useLocation();
    const [isFavorite, setIsFavorite] = useState(false);
    const {getSingleProduct} =  useContext(ProductsContext);
    const navigate = useNavigate();
    const toggleFavorite = () =>{
      setIsFavorite(!isFavorite);
    }

    console.log(location)
    const setSingleProduct = (product: ListProduct) =>{
      getSingleProduct(product);
    }
    

    
    const styleCard = small ? {maxWidth: 175, width: 175} : {maxWidth: 275, width: 275}
  return (
    <>
    <Card className="card" sx={styleCard}  onClick={() => {setSingleProduct(product)}}>
        
        <CardMedia
          sx= {{ height: 340, maxWidth:275 }}
          image={product.images[0]}
          title={product.name}
          className="card-item-image"
          
          onClick={()=>{navigate(location.pathname + `/${product.id}`)}}
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
                    <Button variant="contained" color='secondary' className="buy-button" onClick={() => handleOpen()}>lo quiero</Button>
              </div>
          </div>
        </CardContent>
        <CardActions></CardActions>
    </Card>
    {
      open && <ModalProduct handleClose={handleClose} handleOpen={handleOpen} open={open} />
    }
    </>
  );
}

export default ProductCard;