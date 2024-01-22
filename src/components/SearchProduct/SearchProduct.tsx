import {Search} from '@mui/icons-material';
import './SearchProduct.scss'
import React from 'react'

export interface props {
    serchString:string,
    setSerchString:Function
}

const SearchProduct:React.FC<props> = ({serchString,setSerchString}) => {  
    const handleChangeSerch=(event:React.ChangeEvent<HTMLInputElement>)=>setSerchString(event.target.value);
    
  return(
    <div className="serch-container">
        <div className="serch-color">
            <Search/>
             <input type="text" placeholder="Encuentra el producto que necesitas" value={serchString} onChange={(e)=>handleChangeSerch(e)} />
        </div>
    </div>
  )
}
export default SearchProduct


