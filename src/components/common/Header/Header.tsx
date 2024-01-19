import './Header.scss'
import React from 'react'
import {logo} from '../../../utils/assets'
import { Box, Button, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header: React.FC<{}> = () => {
  return (
      <div className="header-container">
            <Box>
              <img className="header-logo" src={logo} alt="logo"/>
            </Box>

            <div className="buttons-container">

                <Button className="btn-new-user" color='secondary'  variant="contained" size='medium'  disableElevation>
                    Crea tu cuenta
                </Button>

                <Button className="btn-login" variant="outlined" disableElevation>
                    Inicia sesión
                </Button>

                <IconButton sx={{backgroundColor:'white', color:'gray'}}>
                  <ShoppingCartIcon/>
                </IconButton>

                <div className="circul">
                    <span className="circul-menssage">
                        Compra a <strong> CRÉDITO </strong>
                    </span>
                </div>
            </div>
        </div>
  )
}

export default Header