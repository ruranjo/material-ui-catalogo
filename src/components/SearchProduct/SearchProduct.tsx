import {Search} from '@mui/icons-material';
import './SearchProduct.scss'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react'

export interface props {
    serchString:string,
    setSerchString:Function
}

const SearchProduct:React.FC<props> = ({serchString,setSerchString}) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    const handleChangeSerch=(event:React.ChangeEvent<HTMLInputElement>)=>setSerchString(event.target.value);
    
  return(
    <div className="container-serch">
        <div className="color-container-serch">
            <Search/>
             <input type="text" placeholder="Encuentra el producto que necesitas" value={serchString} onChange={(e)=>handleChangeSerch(e)} />
        </div>
        <FormControl fullWidth className='formControl-select'>
                   <InputLabel id="demo-simple-select-label">Todas las categorías</InputLabel>
                   <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={age}
                     onChange={handleChange}
                   >
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                   </Select>
        </FormControl>
    </div>
  )
}
export default SearchProduct


/*
export default function Serch({serchString,setSerchString}:{serchString:string,setSerchString:Function}) {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    const handleChangeSerch=(event:React.ChangeEvent<HTMLInputElement>)=>setSerchString(event.target.value);
    
  return(
    <div className="container-serch">
        <div className="color-container-serch">
            <SearchIcon/>
             <input type="text" placeholder="Encuentra el producto que necesitas" value={serchString} onChange={(e)=>handleChangeSerch(e)} />
        </div>
        <FormControl fullWidth className='formControl-select'>
                   <InputLabel id="demo-simple-select-label">Todas las categorías</InputLabel>
                   <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={age}
                     onChange={handleChange}
                   >
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                   </Select>
        </FormControl>
    </div>
  )
}

*/