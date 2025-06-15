import React from "react";
import { Container, Description, Img, Itens } from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { urlApi } from "../../services/Api";

const Card = ({thumb, tipo, endereco, cidade, cep, valor, slug}) => {
    return(
        <Container>
            <Img>
            <Link to='/imoveis'>
            <img src={thumb} className="thumb" alt="" />
            </Link>
            </Img>
            <Description>
            <h4>{tipo}</h4>
               <Itens>
                <span><FaMapMarkerAlt /> {endereco} - {cep} </span>
                <span>{cidade}</span>
                <span>R$ {valor} / Fim de semana</span>
                </Itens> 
              <Link to={`/imoveis/${slug}`} >Detalhes<FaArrowRight /></Link>
            </Description>
        </Container>
        
    )
}

export default Card;