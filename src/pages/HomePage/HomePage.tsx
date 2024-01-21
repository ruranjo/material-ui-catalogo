import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductContext/ProductsContext'
const HomePage: React.FC<{}> = () => {
    const {state} =  useContext(ProductsContext);
    
  
    return (
    <div>
        {
            state.products[0].listProduct.map((prod,index)=>{
                return (
                    
                    <div key={index}>
                        <h2>{prod.name}</h2>
                        <img src={prod.images[0]} alt="img" />
                    </div>
                
                )
            })
        }
    </div>
  )
}

export default HomePage