import React, { useState } from "react";
import { Container, ContainerForm, Label, Form } from "./styled";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { AppAuth} from '../../context/AppAuth'

const Login = () => {
    const auth = AppAuth()
    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState();
    
    const handleSubmit = async (e) => {
        e.preventDeafault();
        await auth.authenticate(email, password)
    }

    return (
        <Container>
            <ContainerForm>
                <Form onSubmit={handleSubmit}>
                <h2>Acesse sua conta</h2>
                <p>Entre com seu e-mail e senha!</p>
                    <Label>E-mail</Label>
                    <Input
                     type="text"
                     name="email" 
                     placeholder="Informe seu E-mail"
                     onChange={(e) => setEmail (e.target.value) } 
                     />
                    <Label>Senha</Label>
                    <Input
                     type="password" 
                     name="password"
                     placeholder="Informe sua senha"
                     onChange={(e) => setPassword (e.target.value) } 
                      />
                    <Button type="submit">Fazer Login</Button>
                </Form>
            </ContainerForm>
        </Container>
    );
};

export default Login;
