import './Header.scss'
import React from 'react'
import {logo} from '../../../utils/assets'
import { Button, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Header: React.FC<{}> = () => {
  return (
      <div className="header-container">
            <Link  to='/' state='home' >
              <img className="header-logo" src={logo} alt="logo"/>
            </Link>

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