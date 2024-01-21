import React, { useContext, useEffect } from 'react'
import { ProductCard } from '../../components'
import { ProductsContext } from '../../context/ProductContext/ProductsContext';

const ProductPage: React.FC<{}> = () => {

    useEffect(()=>{
      if(location.pathname.toString() === '/producto/motocicletas'){
        console.log(location.pathname);
      }
  
      if(location.pathname.toString() === '/producto/celulares'){
        console.log(location.pathname);
      }
    },[]);

   
  
  const {state} =  useContext(ProductsContext);
  
  return (
    <div>
        
        <div>
        {
            state.products[0].listProduct.map((prod,index)=>{
                return (
                  <ProductCard product={prod} key={index}/>
                )
            })
        }
        </div>
    </div>
    
  )
}

export default ProductPage

