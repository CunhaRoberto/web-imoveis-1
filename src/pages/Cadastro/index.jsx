import React from "react";
import { Container, ContainerForm, Label, Form } from "./styled";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react";
import Api from "../../services/Api"
import { toast } from "react-toastify";

const Cadastro = () => {
const [data, setData] = useState({
    name: '',
    email:'',
    password:'',
    cellPhone: '',
    cpf: ''
    });
    
    const InputValue = (e) => setData({
        ...data, [e.target.name]:
         e.target.value
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('teste')
        Api.post('https://user-api-p9ru.onrender.com/user/', data)
        .then((response) => {
            if(!response.data.error ===true){
                toast(response.data.message);
            } else{
                toast(response.data.message);
            }
        })
        .catch(() => {
            console.log('Erro: Erro no sistema')
        })
    }


    return (
        <Container>
            <ContainerForm>
                <Form onSubmit={handleSubmit} autoComplete="off">
                <h2>Crie sua conta</h2>
                <p>Cadastre-se para acessar a plataforma</p>
                    <Label>Nome</Label>
                    <Input
                     type="text"
                     name="name"
                     placeholder="Informe seu Nome"
                     onChange={InputValue}
                    />
                    <Label>CPF</Label>
                    <Input
                     type="text"
                     name="cpf"
                     placeholder="Informe seu CPF" 
                     onChange={InputValue}
                    />
                    <Label>E-mail</Label>
                    <Input
                     type="text"
                     name="email"
                     placeholder="Informe seu E-mail" 
                     onChange={InputValue}
                    />
                    <Label>Telefone</Label>
                    <Input
                     type="text"
                     name="cellPhone"
                     placeholder="Informe seu E-mail" 
                     onChange={InputValue}
                    />
                    <Label>Senha</Label>
                    <Input 
                    type="text"
                    name="password" 
                    placeholder="Informe sua senha" 
                    onChange={InputValue}
                    />
                    <Button>Fazer o cadastro</Button>
                </Form>
            </ContainerForm>
        </Container>
    );
};

export default Cadastro;
