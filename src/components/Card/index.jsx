import React from "react";
import { Container, Description, Img, Itens } from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({thumb, tipo, endereco, valor, slug}) => {
    return(
        <Container>
            <Img>
            <Link to='/imobi'>
            <img src="https://www.toziimoveis.com.br/assets/blog/9-1e397c7a9726cbf88244bccb62cc5247.jpg" alt="" />
            </Link>
            </Img>
            <Description>
            <h4>{tipo}</h4>
               <Itens>
                <span><FaMapMarkerAlt /> {endereco}</span>
                <span>R$ {valor} / Fim de semana</span>
                </Itens> 
              <Link to={`/imobi/${slug}`} >Detalhes<FaArrowRight /></Link>
            </Description>
        </Container>
        
    )
}

export default Card;