import React from "react";
import { Container, ContainerForm, Label, Form } from "./styled";
import Input from "../../components/Input"
import Button from "../../components/Button"

const Cadastro = () => {
    return (
        <Container>
            <ContainerForm>
                <Form>
                <h2>Crie sua conta</h2>
                <p>Cadastre-se para acessar a plataforma</p>
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Informe seu Nome" />
                    <Label>E-mail</Label>
                    <Input type="text" placeholder="Informe seu E-mail" />
                    <Label>Senha</Label>
                    <Input type="text" placeholder="Informe sua senha" />
                    <Button>Fazer o cadastro</Button>
                </Form>
            </ContainerForm>
        </Container>
    );
};

export default Cadastro;
