import React, { useState } from "react";
import { Container, ContainerForm, Label, Form } from "./styled";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AppAuth } from "../../context/AppAuth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
    const auth = AppAuth();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");



    const handleSubmit =  async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Limpar erros anteriores
        
        try {
            if(!email){
                toast.error("Informe o e-mail!");
                email = ''
            } 

            if(!password){
                toast.error("Informe senha!");
                password = ''
            } 
                   
            if(email && password)auth.authenticate(email, password);
            
        } catch (error) {
            setError("Erro ao autenticar. Verifique suas credenciais.");
            console.error("Erro ao autenticar:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <ContainerForm>
                <Form onSubmit={handleSubmit}>
                    <h2>Acesse sua conta</h2>
                    <p>Entre com seu e-mail e senha!</p>
                    
                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <Label>E-mail</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Informe seu E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Label>Senha</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Informe sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" disabled={loading}>
                        {loading ? "Carregando..." : "Fazer Login"}
                    </Button>
                    
                    <p></p>
                    
                    <Button>
                     <Link to="/cadastro">Fazer o cadastro</Link>
                     </Button>

                     <Link to="/forgotpassword">Esqueci minha senha</Link>
                </Form>
            </ContainerForm>
        </Container>
    );
};

export default Login;
