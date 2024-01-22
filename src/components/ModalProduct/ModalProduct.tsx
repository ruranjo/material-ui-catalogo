import './ModalProduct.scss'
import { Close, Done } from '@mui/icons-material';
import { Box, Button, Modal } from '@mui/material';
import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductContext/ProductsContext';
import { ListProduct } from '../../interfaces/data.interface';

export interface props{
    open: boolean,
    handleOpen: ()=>void,
    handleClose: ()=>void,
}

const ModalProduct: React.FC<props> = ({ open, handleOpen, handleClose}) => {
   

    const {state} =  useContext(ProductsContext);
    const product: ListProduct = state.single_product;
    
    const style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
        <div className="modal-card-container">
                <div className="modal-card">
                    <div className="header-modal-card">
                          <img src={product?.images[0]} alt={product?.name} />
                          <div className="button-close">
                             <Button onClick={()=>{handleClose()}} >
                                <Close />
                             </Button>
                          </div>
                    </div>
                    <div className="content-modal-card">
                       <div className="content-description-cost">
                            <div>
                                <img src={product?.images[1]} alt={product?.name} />
                            </div>
                            <div className="content-title">
                                 <span className="title-name">{product?.name}</span>
                                 <span className="title-color">Color Selecionado: <strong>{product?.details.color}</strong></span>
                                 <span className="title-buy-cost">${product.price}x1</span>
                            </div>
                       </div>
                       <div className="content-description">
                          <span>1 item en tu carrito</span>
                          <span>Subtotal:${product.price}</span>
                       </div>
                    </div>
                    <div className="footer-modal-card">
                          <div className="container-circul-done">
                              <div className="circul-done">
                                <Done className="doneIcon"/>
                              </div>
                          </div>
                          <h3>
                             Te vas a llevar este celular por solo
                          </h3>
                          <h2>
                            $120 p/semana!
                          </h2>
                          <div className="container-button-buy"> 
                          <Button className="button-buy">
                            COMPRA A CRÉDITO
                          </Button>
                          </div>
                          <div className="container-option">
                            <div className="barra-option"></div>
                            <span> <em> o puedes</em> </span>
                            <div className="barra-option"></div>
                          </div>
                          <span className="titel-buy">Comprar a contado</span>
                    </div>
                </div>
            </div>
        </Box>


      </Modal>
    </div>
  )
}

export default ModalProduct;
