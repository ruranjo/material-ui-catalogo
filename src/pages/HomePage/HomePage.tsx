import './HomePage.scss'
import React, { useContext } from 'react'
import {hero} from '../../utils/assets'
import {banner} from '../../utils/assets'
import {etiquetas} from '../../utils/assets'

import Carousel from '../../components/Carousel/Carousel';
import { Typography } from '@mui/material';
import { ProductsContext } from '../../context/ProductContext/ProductsContext';
import { ProductCard } from '../../components';
const HomePage: React.FC<{}> = () => {

    const {state} =  useContext(ProductsContext);

    return (
    <div className='main-container'>
        
        <div className='hero-container'>
            <div className='carousel-container'>
                <Carousel images={hero} autoPlay/>
            </div>
             
            <div className='banners-container'>
                
                <div className='banner'>
                    <img src={banner[0]} alt="" />
                </div>

                <div className='banner'>
                    <img src={banner[1]} alt="" />
                </div>
            </div>
        </div>

        <div className='week-favorites'>
            <Typography textAlign={'center'} fontWeight={600} color="primary" variant='h3'>Los favoritos de la semana</Typography>
            <div className='favorites'>
            {
                state.products[0].listProduct.slice(0,4).map((product)=>{
                    return(
                        <ProductCard  product={product} small={true} />
                    )
                })
            }   
            </div>
            
        </div>
        <img src={etiquetas[1]} alt="" className='auto-img'/>
        <img src={etiquetas[0]} alt="" className='auto-img' />
        <div className='week-favorites'>
            
        </div>
    </div>
  )
}

export default HomePage;


/*

*/