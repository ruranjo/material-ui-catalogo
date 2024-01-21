import { createContext, useEffect, useReducer } from "react";
import { StateData } from "../../interfaces/data.interface";
import { ProductReducer } from "../../reducers";
import { data } from "../../utils/datta";

export type ContextProps = {
    state: StateData
}

export const ProductsContext = createContext<ContextProps>({} as ContextProps);

const INITIAL_STATE: StateData = {
  products : data,
  single_product: {}
}

interface props {
  children: JSX.Element | JSX.Element[]
}

const ProductsProvider = ({children}:props) => {
  
  useEffect(()=>{
    console.log("listo")
  },[]);

  const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

  return (
    <ProductsContext.Provider value={{state}}>
      {children}
    </ProductsContext.Provider>
  )

}

export default ProductsProvider;