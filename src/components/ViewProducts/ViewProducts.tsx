import './ViewProducts.scss'
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductContext/ProductsContext';
import { FilterBox, ProductCard, SearchProduct } from '..';
import { useLocation } from 'react-router-dom';
import { Data, FilterBoxType, ListProduct } from '../../interfaces/data.interface';

const ViewProducts: React.FC<{}> = () => {
    const {state} =  useContext(ProductsContext);
    const location = useLocation();
    const [serch,setSerch]=React.useState("");

    const dataEmpty:Data[]=[ {
        name_page:"",
        brands:[],
        rate:[],
        listProduct:[],
    }]

    useEffect(()=>{
      setControlFilterBox({
        brand:[],
        rate:(list[0]?.rate)? list[0].rate:[1,10000],
        review_number:0,
    })
    },[location.state])

    const validate =(name:string,query:string)=>{
      const aux1=name.toLocaleLowerCase();
      const  aux2=query.toLocaleLowerCase();
      return !aux1.includes(aux2);
  }

    const list: Data[] = (state.products)? state.products.filter((product: Data) => product.name_page === location.state):dataEmpty;

    
    const controlFilterBox:FilterBoxType={
        brand:list[0]?.brands??[],
        rate:(list[0]?.rate)?list[0].rate:[1,10000],
        review_number:0
    }

    const [controlFilterBoxState, setControlFilterBox] = useState<FilterBoxType>({
        brand:[],
        rate:(list[0]?.rate)? list[0].rate:[1,10000],
        review_number:0,
    });
    
    const getItemFilter = (list : Data[]): ListProduct[] => {

        if(!list[0].listProduct){
            return [];
        }
        

       return list[0].listProduct.filter((item:ListProduct) => {

              if(serch.length>0 && validate(item.name,serch)){
                return false
              } 
              if((controlFilterBoxState.rate[0]>item.price || controlFilterBoxState.rate[1]<item.price)){
                return false
              } 
              if (controlFilterBoxState.brand.length > 0 && !controlFilterBoxState.brand.includes(item.brand)){
                
                return false;
              } 
              if(controlFilterBoxState.review_number>0 && item.review_number < controlFilterBoxState.review_number){
                return false;
              }

              return true
       })

    }

    return (
    <div className="viewproducts-container-view">
        <div>
            <FilterBox controlFilterBox={controlFilterBox}  setstateControl={setControlFilterBox} stateControl={controlFilterBoxState}/>
        </div>

        <div className="Productcards-serch-container">
          
          <SearchProduct serchString={serch} setSerchString={setSerch} />

          <div className="cardproducts-container-view" >
          {
              list && getItemFilter(list).map((prod,index)=>{
                  return (
                    <ProductCard product={prod} key={index} small={false} />
                  )
              })
          }
          </div>
        </div>

    </div>
  )

  
}

export default ViewProducts
