import './SingleProductPage.scss'
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductContext/ProductsContext';
import { useLocation } from 'react-router-dom';
import { Rating } from '@mui/material';


const SingleProductPage: React.FC<{}> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const location  = useLocation();
    const {state} =  useContext(ProductsContext);
    const single = state.single_product;
    
    const [mainPhotoState,setMainPhoto] = useState(single.images[0]);

    const changePhoto = (photo:string) =>{
        setMainPhoto(photo);
    }

  return (
    <div className='single-product-main-container'>
        <div className='url-product'>
            <span>volver a resultados</span><h6>{location.pathname.split('/')[2].toUpperCase()}</h6>/<h6>{single.brand}</h6>/<h6>{single.name}</h6>
        </div>

        <div className='content-single-main'>

          <div className='center-content-single'>
            <div className='gallery' >
              {
               single && single.images.map((photo, index)=>{
                return (
                  <img  className={photo === mainPhotoState ? 'selected-photo':''} src={photo} alt="" onClick={()=> changePhoto(photo)} key={index}/>
                )
               })
              }
            </div>

            <div className='description' >
                
                <div className='main-photo'>
                  <img src={mainPhotoState} alt="" />
                </div>

                <div className='description-content'>

                    <h2>{single.name}</h2>
                    <div>
                      <Rating name="size-large" value={single.review_number} size="large" readOnly/>
                      <span>( {single.sales} vendidos )</span>
                    </div>
                    <p  className=''>
                    {single.review}
                    </p>
                    <div className='price-tag-week'>
                      
                      <div className='column-direction price-tag'>
                        <span>Precio</span>
                        <h3>${single.price}</h3>
                      </div>

                      <div className='column-direction week-tag'>
                        Desde
                        <h3>${single.price}</h3>
                        semanal
                      </div>

                    </div>
                </div>

            </div>

            <div className='details' >

            </div>
        </div>
        </div>

  </div>
  )
}

export default SingleProductPage;