import React from "react";
import { Container, Description, Img, Itens } from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const Card = () => {
    return(
        <Container>
            <Img>
            <img src="https://www.toziimoveis.com.br/assets/blog/9-1e397c7a9726cbf88244bccb62cc5247.jpg" alt="" />
            </Img>
            <Description>
               <h4>Casa 1</h4>
               <Itens>
                <span><FaMapMarkerAlt /> Residencial Santa Cruz</span>
                <span>R$ 950,00 / Fim de semana</span>
                </Itens> 
              <a href="#">Detalhes<FaArrowRight /></a>
            </Description>
        </Container>
        
    )
}

export default Card;