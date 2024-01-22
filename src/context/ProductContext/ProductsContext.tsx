import { createContext, useEffect, useReducer } from "react";
import { ListProduct, StateData } from "../../interfaces/data.interface";
import { ProductReducer } from "../../reducers";
import { data } from "../../utils/data";

export type ContextProps = {
    state: StateData,
    getSingleProduct: (product: ListProduct) => void;
}

export const ProductsContext = createContext<ContextProps>({} as ContextProps);

const INITIAL_STATE: StateData = {
  products : data,
  single_product: {} as ListProduct
}

interface props {
  children: JSX.Element | JSX.Element[]
}

const ProductsProvider = ({children}:props) => {
  
  useEffect(()=>{
    console.log("listo")
  },[]);

  const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

   const getSingleProduct = (product: ListProduct) =>{
    dispatch({type:'GET_SINGLE_PRODUCT',payload:product});
   }

  return (
    <ProductsContext.Provider value={{state,getSingleProduct}}>
      {children}
    </ProductsContext.Provider>
  )

}

export default ProductsProvider;