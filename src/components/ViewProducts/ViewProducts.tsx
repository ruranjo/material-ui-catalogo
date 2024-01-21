import './ViewProducts.scss'
import React, { useContext, useState } from 'react'
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

    console.log(location.state);
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
            
              if((controlFilterBoxState.rate[0]>item.price || controlFilterBoxState.rate[1]<item.price)){
                return false
              } 
              if (controlFilterBoxState.brand.length > 0 && !controlFilterBoxState.brand.includes(item.brand)){
                
                return false;
              } 
              if(controlFilterBoxState.review_number>0 && item.review_number < controlFilterBoxState.review_number){
                return false;
              }
              console.log(controlFilterBoxState.brand);
              return true
       })

    }

    return (
    <div className="viewproducts-container">
        <div>
            <FilterBox controlFilterBox={controlFilterBox}  setstateControl={setControlFilterBox} stateControl={controlFilterBoxState}/>
        </div>

        <div className="container-g-carditems-serch">
          
          <SearchProduct serchString={serch} setSerchString={setSerch} />

          <div className="cardproducts-container">
          {
              list && getItemFilter(list).map((prod,index)=>{
                  return (
                    <ProductCard product={prod} key={index}/>
                  )
              })
          }
          </div>
        </div>

    </div>
  )

  
}

export default ViewProducts

/*
return (
    <div className="container-viewitems">
        <div className="container-controlBar">
          <ControlBar controlBar={controlBar} stateControl={stateControl} setstateControl={setstateControl}/>
        </div>
        <div className="container-g-carditems-serch">
            <Serch serchString={serchString} setSerchString={setSerchString}/>
            <div className='modal-container-controlBar'>
               <CustomizedDialogs
                 buttonText={"Filter"}
                 title='Filter'
               >
                    <ControlBar controlBar={controlBar} stateControl={stateControl} setstateControl={setstateControl}/>
               </CustomizedDialogs>
            </div>

            <div className="container-grid-carditems">
                {
                    getItems().map((item:Item) => {
                       return <CardItem key={item.id} item={item} listFavorite={listFavorite} setListFavorite={setListFavorite}/>
                    })
                }
            </div>
        </div>
    </div>
)

*/