import React from "react";
import { Container, Logo, Menu } from "./styles";
import LogoImg from"../../assets/8d8b2599-3c61-432f-9656-2dfe97ae04fe.jpg";

const Header = ( ) => {
    return (
      <Container>
         <Logo>
            <img src={LogoImg} alt="" style={{ width: '160px', height: '60px' }} />
         </Logo>
         <Menu>
            <ul>
                <li><span>Cadastro/Login</span></li>
            </ul>
         </Menu>
      </Container>
    )
}

export default Header;