import React from "react";
import { Container, ContainerForm, Label, Form } from "./styled";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react";
import Api from "../../services/Api"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const NewPassword = () => {
const [data, setData] = useState({
    // name: '',
    // email:'',
    newPassword:'',
    // cellPhone: '',
    // cpf: ''
    });
    
    const InputValue = (e) => setData({
        ...data, [e.target.name]:
         e.target.value
        });

        const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data.cpf.length)
        // if(!data.name) toast.error("Informe o nome"); 
        // if(!data.cpf) toast.error("Informe o CPF");
        // if(data.cpf.length < 11 || data.cpf.length > 11){
        //     toast.error("Informe o CPF um válido (com 11 caracteres)");
        //     data.cpf = ''
        // } 
        // if(data.cellPhone.length < 11 || data.cellPhone.length > 11){
        //     toast.error("Informe o telefone um válido (com 11 caracteres)");
        //     data.cellPhone = ''
        // } 
        
        // if(!data.email) toast.error("Informe o E-mail");
        // if(!data.cellPhone) toast.error("Informe o telefone");
        if(!data.newPassword) toast.error("Informe a nova senha");
        if(data.newPassword.length < 6 || data.NewPassword.length > 6){
            toast.error("Informe uma senha válida (com 6 números)")
            data.password = ''
        }
        if(data.confirmNewPassword.length < 6 || data.confirmNewPassword.length > 6){
            toast.error("Informe uma senha válida (com 6 números)")
            data.password = ''
        }

        if(data.newPassword !== data.confirmNewPassword){
            toast.error("As 2 senhas devem ser iguais")
            data.newPassword = ''
            data.confirmNewPassword = ''
        }


        if(data.code && data.NewPassword && data.confirmNewPassword){       
            Api.post('https://user-api-p9ru.onrender.com/user/', data)
            .then((response) => {
                console.log(response.status)
                if (response.status === 201) {
                    toast.success("Nova senha cadastrada com sucesso!");
                    
                    setTimeout(() => {
                        navigate("/login");
                    }, 1000);
                }                
            })
            .catch((response) => {
                if (response.status === 404) {
                    toast.error(`cod inv!`);                               
                }                 
                if (response.status === 400) {
                    toast.error(`Dados inválidos!`);                               
                }                
                else{
                    toast.error('Erro ao cadastrar nova senha, tente novamente mais tarde!');
                }                
            })           
        }

        
    }


    return (
        <Container>
            <ContainerForm>
                <Form onSubmit={handleSubmit} autoComplete="off">
                <h2>Crie sua nova senha</h2>
                <p></p>
                    {/* <Label>Nome</Label>
                    <Input
                     type="text"
                     name="name"
                     placeholder="Informe seu Nome"
                     onChange={InputValue}
                    />
                    <Label>CPF</Label>
                    <Input
                     type="number"
                     name="cpf"
                     placeholder="Informe seu CPF" 
                     onChange={InputValue}
                    />
                    <Label>E-mail</Label>
                    <Input
                     type="email"
                     name="email"
                     placeholder="Informe seu E-mail" 
                     onChange={InputValue}
                    />
                    <Label>Telefone</Label>
                    <Input
                     type="number"
                     name="cellPhone"
                     placeholder="Informe seu telefone" 
                     onChange={InputValue}
                    /> */}
                    <Label>Código</Label>
                    <Input 
                    type="text"
                    name= "code" 
                    placeholder="Informe o código enviado no seu email" 
                    onChange={InputValue}
                    />

                    <Label>Nova senha</Label>
                    <Input 
                    type="text"
                    name= "newPassword" 
                    placeholder="Informe uma senha com 6 caracteres" 
                    onChange={InputValue}
                    />
                    <Label>Repita a senha</Label>
                    <Input 
                    type="text"
                    name= "confirmNewPassword" 
                    placeholder="Repita a senha " 
                    onChange={InputValue}
                    />
                    <Button >
                     <Link to="/NewPassword">Enviar</Link>
                     </Button>
                </Form>
            </ContainerForm>
        </Container>
    );
};

export default NewPassword;
