import React from "react";
import { Container, ContainerForm, Label } from "./styled";
import Input from "../../components/Input"
import Button from "../../components/Button"

const Login = () => {
    return (
        <Container>
            <h2>Acesse sua conta</h2>
            <p>Entre com seu e-mail e senha!</p>
            <ContainerForm>
                <form action="">
                    <Label>E-mail</Label>
                    <Input type="text" placeholder="Informe seu E-mail" />
                    <Input type="text" placeholder="Informe sua senha" />
                </form>
            </ContainerForm>
        </Container>
    );
};

export default Login;
