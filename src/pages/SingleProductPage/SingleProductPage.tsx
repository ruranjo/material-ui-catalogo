import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductContext/ProductsContext';
import { useLocation } from 'react-router-dom';

const SingleProductPage: React.FC<{}> = () => {
    const location  = useLocation();
    const {state} =  useContext(ProductsContext);
    console.log(state.single_product);
    const single = state.single_product;
  return (
    <div className='single-product-main-container'>
        <div className='url-product'>
            <span>volver a resultados</span><h6>{location.state}</h6><h6>{single.brand}</h6><h6>{single.name}</h6>
        </div>
        <div className='content-single-main'>

        </div>

    </div>
  )
}

export default SingleProductPage;