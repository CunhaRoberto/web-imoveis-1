import React, { Fragment } from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../components/Card";

const Home = () => {
    let Cards = [];
    for (let i =0; i<4; i++) {
        Cards.push(<Card key={i}/>)
    }
    return (
        <Fragment>
            <Header>
                <h2>Encontre sua propiedade dos sonhos!!</h2>
            </Header>
            <Wrapper>
                {Cards}
            </Wrapper>
        </Fragment>
    )
}

export default Home;