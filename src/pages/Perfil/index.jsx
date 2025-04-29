import React from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button'
import { toast } from 'react-toastify'
import { Container, Left, Message, Right, Form } from './styles';

const Perfil = () => {
    
    return(
        <Container>
            <Left>
                <h2>Minhas mensagens</h2>
                {[1, 2, 3].map(item => (
                    <Message>
                        <span>Nome: Arthur Ferreira Cunha</span>
                        <span>Email: Teste@teste.com</span>
                        <p>gqibehjqioegoj</p>
                    </Message>
                ))}
            </Left>
            <Right>
                <h2>Criar Anúncio</h2>
                <Form>
                    <Input
                        type="file"
                        name="thumb"
                        placeholder="Nome:"
                    />
                    <Input
                        type="text"
                        name="tipo"
                        placeholder="Informe o tipo de imóvel:"
                    />
                    <Input
                        type="text"
                        name="endereco"
                        placeholder="Informe o endereço do imóvel"
                    />
                    <Input
                        type="text"
                        name="uf"
                        placeholder="UF:"
                    />
                    <Input
                        type="text"
                        name="descricao"
                        placeholder="Informe seu nome:"
                    />
                    <Input
                        type="text"
                        name="email"
                        placeholder="Informe o seu e-mail:"
                    />
                    <Input
                        type="text"
                        name="valor"
                        placeholder="Informe o valor do seu imóvel:"
                    />
                    <Input
                        type="text"
                        name="telefone"
                        placeholder="Informe o seu telefone:"
                    />
                    <Button type="submit">Cadastrar imóvel</Button>
                </Form>
            </Right>
        </Container>
        
    )

}

export default Perfil;