import React, { Fragment, useEffect, useState } from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Api from "../../services/Api";

const Home = () => {
    const [imobi, setImobi] = useState([]);
    useEffect(() => {
        Api.get('/litimobi')
        .then((response) => {
            setImobi(response.data)
        })
        .catch(() => {
            console.log( "Erro: Erro no sistema");
        })
    })
    return (
        <Fragment>
            <Banner />
            <Header>
                <h2>Encontre sua propiedade dos sonhos!!</h2>
            </Header>
            <Wrapper>
                {imobi.map(items => (
                    <Card 
                    key={items.id}
                    thumb={items.thumb}
                    tipo={items.tipo}
                    endereco={items.endereco}
                    valor={items.valor}
                    slug={items.slug}
                    />
                ))}
            </Wrapper>
        </Fragment>
    )
}

export default Home;