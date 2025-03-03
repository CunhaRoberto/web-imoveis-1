import React from "react";
import { Container, ContainerForm, Label, Form } from "./styled";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react";
import Api from "../../services/Api"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const ForgotPassword = () => {
const [data, setData] = useState({
    email:'',
    });
    
    const InputValue = (e) => setData({
        ...data, [e.target.name]:
         e.target.value
        });

        const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
       
        
            
        if(!data.email) toast.error("Informe o E-mail");
        if(data.email ){       
            Api.post( 'https://user-api-p9ru.onrender.com/auth/forgot_password', data)
            .then((response) => {
                console.log(response.status)
                if (response.status === 200) {
                    toast.success("Código enviado para seu email!");
                    
                    setTimeout(() => {
                        navigate("/login");
                    }, 1000);
                }                
            })
            .catch((response) => {              
                if (response.status === 404) {
                    toast.error(`Email não cadastrado`);                               
                }                

                else{
                    toast.error('Erro ao recuperar a senha, tente novamente mais tarde!');
                }                
            })           
        }

        
    }


    return (
        <Container>
            <ContainerForm>
                <Form onSubmit={handleSubmit} autoComplete="off">
                <h2>Recupere sua senha</h2>
                <p>Cadastre-se para acessar a plataforma</p>
                    <Label>E-mail</Label>
                    <Input
                     type="email"
                     name="email"
                     placeholder="Informe seu E-mail" 
                     onChange={InputValue}
                    />
                    <Button >
                     <Link to="/forgotpassword">Enviar</Link>
                     </Button>
                </Form>
            </ContainerForm>
        </Container>
    );
};

export default ForgotPassword;
