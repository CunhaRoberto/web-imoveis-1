import React from "react";
import { Container, Logo, Menu } from "./styles";
import LogoImg from"../../assets/8d8b2599-3c61-432f-9656-2dfe97ae04fe.jpg";
import { Link } from "react-router-dom";

const Header = ( ) => {
    return (
      <Container>
         <Logo>
            <Link to='/'>
               <img src={LogoImg} alt="" style={{ width: '160px', height: '60px' }} />
            </Link>
         </Logo>
         <Menu>
            <ul>
                <li><Link to='/login'><span>Cadastro/Login</span></Link></li>
            </ul>
         </Menu>
      </Container>
    )
}

export default Header;