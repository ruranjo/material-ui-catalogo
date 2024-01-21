import { ListProduct, StateData } from "../../interfaces/data.interface";
import {data} from '../../utils/data'
type ProductAction = 
| {type:'GET_PRODUCTS', payload: {}}
| {type:'GET_SINGLE_PRODUCT', payload: ListProduct}

const productReducer = (state: StateData, action: ProductAction) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
        return {...state, products: {...state.products, data}}
        break;
  
    default:
        return state;
        break;
  }
}

export default productReducer;