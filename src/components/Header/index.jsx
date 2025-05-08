import React from "react";
import { Container, Logo, Menu } from "./styles";
import LogoImg from"../../assets/07349f40-1d1f-4e38-9c58-46c355e60fdd-removebg-preview (1).png";
import { Link } from "react-router-dom";

const Header = () => {
   const handleLogooff = () => {
      localStorage.clear();
      window.location.href = "/login";
   }

   const userLogged = localStorage.getItem('user');
    
    return (
      <Container>
         <Logo>
            <Link to='/'>
               <img src={LogoImg} alt="" style={{ width: '160px', height: '120px' }} />
            </Link>
         </Logo>
         <Menu>
            <ul>
               {!userLogged ?
               <li><Link to='/login'><span>Cadastro/Login</span></Link></li>
               :
               <li><Link onClick={handleLogooff}><span>Sair</span></Link></li>
            }
            </ul>
         </Menu>
      </Container>
    )
}

export default Header;