import React, { Fragment, useEffect, useState } from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Api from "../../services/Api";
import { toast } from "react-toastify";

const Home = () => {
    const [imobi, setImobi] = useState([]);

    useEffect(() => {
        Api.get('https://user-api-p9ru.onrender.com/property/')
            .then((response) => {
                if (!response.data.error) {
                    toast.success("Dados carregados com sucesso");
                    setImobi(response.data); // ajuste aqui se necessário
                } else {
                    toast.error("Erro ao carregar dados.");
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    toast.error('Erro ao autenticar. Verifique suas credenciais.');
                } else {
                    toast.error('Erro inesperado. Tente novamente mais tarde.');
                }
            });
    }, []); // evita loop infinito

    useEffect(() => {
    console.log('imobi atualizado:', imobi);
    }, [imobi]);

    return (
        <Fragment>
            <Banner />
            <Header>
                <h2>Encontre sua propriedade dos sonhos!!</h2>
            </Header>
            <Wrapper>
                {imobi.map((item) => (
                    <Card 
                        key={item.id}
                        thumb={item.thumb}
                        tipo={item.tipo}
                        endereco={item.address}
                        cep = {item.zipCode}
                        cidade = {item.city}
                        valor={item.price}
                        slug={item.slug}
                    />
                ))}
            </Wrapper>
        </Fragment>
    );
};

export default Home;
