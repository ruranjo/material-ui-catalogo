import React from 'react'
import "./Footer.scss"
import {images} from '../../../utils/assets'
import {Instagram, Facebook, LinkedIn, WhatsApp, Telegram}  from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Footer: React.FC<{}> = () => {
    return(
        <>
        <footer className="footer-container">
             
             <img className="background-ondas" src={images.ondas} alt="ondas"/>

            <div className="container-information">

                <div className="text-container">
                   <p>OFERTAS Y PROMOCIONES</p>
                   <div>
                        <h2>No te Pierdas <br/> nuestras ofertas!</h2>
                   </div>

                   <form action="#" className="email-conteiner">
                        <input type="email" placeholder="Tu dirección de correo electrónico" required/>
                        <IconButton>
                            <Telegram />
                        </IconButton>
                   </form>

                   <div className="info-links">
                       <div className="footer-logo">
                           <img className="logo-img" src={images.logo} alt="logo"/>
                       </div>
                        <div className="footer-link">
                           <span>
                               Envios y devoluciones 
                           </span>
                           <span>
                               Preguntas Frecuentes
                           </span>
                        </div>
                        <div className="footer-link">
                           <span>
                               Aviso de privacidad
                           </span>
                           <span>
                               Terminos y condiciones 
                           </span> 
                        </div>
                   </div>

                   <span className="message-reserved">
                    Todos los derechos reservados © Macropay 2024 
                   </span>
                   
                </div>

                <div className="logo-smile"> 
                    <img className="img-logo-smile" src={images.smile} alt="smile"/>
                </div>

                <div className="social-message">
                    <h2>Conversemos!</h2>
                    <p>
                        Loren ipsum dolor sit amet
                    </p>
                    <div className="icon-social">
                        <a href="/#"> <Facebook/></a>
                        <a href="/#"> <Instagram/></a>
                        <a href="/#"> <LinkedIn/></a>
                        <a href="/#"> <WhatsApp/></a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;