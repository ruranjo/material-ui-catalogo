import './ProductPage.scss'
import React, { useContext } from 'react'

import { ProductCard, ViewProducts } from '../../components'
import Carousel from '../../components/Carousel/Carousel'
import {hero} from '../../utils/assets'
import { ProductsContext } from '../../context/ProductContext/ProductsContext'
import { Typography } from '@mui/material'

const ProductPage: React.FC<{}> = () => {
  const {state} =  useContext(ProductsContext);
  return (
    <div className='center-content'>
       <ViewProducts/>
       <div className='carousel-container-product'>
                <Carousel images={hero} autoPlay/>
        </div>
        <div className='week-favorites'>
            <Typography textAlign={'center'} fontWeight={600} color="primary" variant='h3'>Los favoritos de la semana</Typography>
            <div className='favorites' >
            {
                state.products[0].listProduct.slice(0,4).map((product,index)=>{
                    return(
                        <ProductCard  product={product} small={true} key={index}/>
                    )
                })
            }   
            </div>
            
        </div>
    </div>
    
  )
}

export default ProductPage

