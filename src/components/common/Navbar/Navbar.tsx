import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import {listRoutes} from "../../../utils/urls";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import "./Navbar.scss"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius:20,
  boxShadow: 24,
  p: 4,
};

const Navbar = () =>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const location = useLocation();

    const isPathActivate = (path:string[])=>{
        return path.includes(location.pathname)? "active-link" : "";
    }

    return(
        <nav className="nav-container">
           
           <ul className="menu-container">
               {
                     listRoutes.map((item,index)=>{
                        return(
                            <li key={index} className={isPathActivate(item.url)}>
                                <Link  to={item.path} state={item.name} >{item.name}</Link>
                                <span className="bottom-line"></span>
                            </li>
                        )   
                     })
                }
           </ul>

            <div className="menu-mobile">
              <IconButton onClick={handleOpen}><DensityMediumIcon/></IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <ul className="menu-container-mobile">
                          {
                          listRoutes.map((item,index)=>{
                              return(
                                  <li key={index} className={isPathActivate(item.url)}>
                                      <Link  to={item.path} state={item.name} >{item.name}</Link>
                                  </li>
                              )   
                          })
                          }
                  </ul>
                </Box>
              </Modal>
            </div >
        </nav>
    )
}

export default Navbar;

