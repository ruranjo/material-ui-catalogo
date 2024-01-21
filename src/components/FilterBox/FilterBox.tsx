import './FilterBox.scss'
import { Checkbox,  Rating,  TextField } from '@mui/material';
import React from 'react'
import { FilterBoxType } from '../../interfaces/data.interface';

interface props {
    controlFilterBox: FilterBoxType,
    stateControl: FilterBoxType,
    setstateControl: Function;
}

const FilterBox:React.FC<props> = ({controlFilterBox, stateControl, setstateControl}) => {
    const [value, setValue] = React.useState<number | null>(0);
   
    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const aux = (event.target.checked)
        ?[...stateControl.brand,event.target.value]
        :stateControl.brand.filter((item)=>item!==event.target.value);
        setstateControl({...stateControl,brand:aux})
    };
    
    const handleCheckPrice = (targe:string,type:number) => {
        const value = parseInt(targe);
        (type===1)
        ?setstateControl({...stateControl,rate:[value,stateControl.rate[1]]})
        :setstateControl({...stateControl,rate:[stateControl.rate[0],value]})
    };
    
    const handleCheckRating = (newValue:number | null) => {
        setstateControl({...stateControl,review_number:newValue})
    };
    return (
        <div className='container-control-bar'>
            <div className='container-control-bar-filter-select'>
                <h3>Ordenar por</h3>
               
            </div>
            <ul className='list-style-none list-Control-Bar'>
                <li>
                    <h3>Marcas</h3>
                    <div className='list-Control-checkbok'>
                       {
                        controlFilterBox.brand.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <Checkbox  
                                        value={item}
                                        onChange={handleCheck}
                                        
                                     />
                                    <label>{item}</label>
                                </div>
                            )
                        })
                       }
                    </div>
                </li>
                <li>
                    <h3>Precios</h3>
                    <div className='costRate'>
                        <TextField
                            id="outlined-number"
                            label={controlFilterBox.rate[0].toString()}
                            size="small"
                            minRows={1}
                            maxRows={controlFilterBox.rate[1]}
                            value={stateControl.rate[0]}
                            onChange={(e)=>{handleCheckPrice(e.target.value,1)}}
                            type="number"
                            InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        <hr/>
                        <TextField
                            id="outlined-number"
                            size="small"
                            minRows={1}
                            maxRows={controlFilterBox.rate[1]}
                            value={stateControl.rate[1]}
                            label={controlFilterBox.rate[1].toString()}
                            type="number"
                            onChange={(e)=>{handleCheckPrice(e.target.value,2)}}
                            InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </div>
                </li>
                
                <li>
                    <h3>Reviews</h3>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            event.preventDefault();
                            setValue(newValue);
                            handleCheckRating(newValue);
                        }}
                      />
                </li>

                <li>
                  <h3>Memoria</h3>
                </li>
                <li>
                  <h3>Rango</h3>
                </li>
                <li>
                  <h3>Cámara</h3>
                </li>
            </ul>
        </div>
      );
}

export default FilterBox


