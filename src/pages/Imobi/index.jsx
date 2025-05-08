import React, { Fragment,
   useEffect,
    useState } from "react";
import { 
  Container, 
  Description, 
  Left, 
  Profile, 
  ProfileContact, 
  ProfileDescription, 
  ProfileFormContact, 
  ProfileImg,
  Right, 
  Thumb 
} from "./styles";
import TopBanner from "../../components/TopBanner";
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import Api, { urlApi } from "../../services/Api"
import { useParams } from "react-router-dom";
import Button from "../../components/Button"

const Imobi = () => {
  const { slug } = useParams();
  const [dataimobi, setDataImobi] = useState([]);

  useEffect(() => {
    Api.get(`/listimobi/${slug}`)
    .then((response) => {
      setDataImobi(response.data)
    })
    .catch(() => {
      console.log("Erro: Erro ao listar imóvel")
    })
  }, [])

  const {
    tipo,
    endereco,
    descricao,
    thumb,
    telefone,
    name,
    email,
    userId
    
  } = dataimobi;

    const [client_name, setClientName] = useState('');
    const [client_email, setClientEmail] = useState('');
    const [client_mensagem, setClientMensagem] = useState('');

    const dataClient = {
      client_name,
      client_email,
      client_mensagem,
      userId
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      Api.post('/createmessage', dataMessage)
      .then((response) => {
        if (!response.data.erro === true) {
          toast(response.data.message);
        } else {
          toast(response.data.message)
        }
      })
      .catch(() => {
        console.log('Erro: Erro no sistema')
      })
    }
    return (
        <Fragment>                   
         <TopBanner
         tipo={tipo} 
         descricao={descricao}
         thumb={thumb}
         />  
         <Container>
            <Left>
                <Thumb>
                    <img src={`${urlApi}/uploads/${thumb}`} alt="" />
                </Thumb>
            <Description>
              <h2>{tipo}</h2>
              <h5>Endereço: {endereco}</h5>
            <p>   {descricao}</p>
            </Description>
            </Left>
            <Right>
                <Profile>
                  <ProfileImg>
                    <img src="https://i.pinimg.com/736x/a8/da/22/a8da222be70a71e7858bf752065d5cc3.jpg" alt="" />
                  </ProfileImg>
                  <ProfileDescription>
                    <h3>{name}</h3>
                    <p>Descrição do usuário</p>
                  </ProfileDescription>
                </Profile>
                <ProfileContact>
                    <h3>Informações para contato:</h3>
                    <p>{telefone}</p>
                    <p>{email}</p>
                </ProfileContact>
                <ProfileFormContact>
                  <h3>Contate o anunciante</h3>
                  <form onSubmit={handleSubmit} autoComplete="off">
                      <Input
                        type="hidden"
                        name="userId"
                        value={userId}
                      />
                      <Input 
                        type="text" 
                        placeholder="E-mail:"
                        name="client_email"
                        onChange={(e) => setClientEmail(e.target.value)}
                      />
                    <TextArea
                     placeholder="Mensagem:"
                     name="client_mensagem"
                     onChange={(e) => setClientMensagem(e.target.value)}
                    ></TextArea>
                    <Button>Enviar mensagem</Button>
                  </form>
                </ProfileFormContact>
            </Right>
         </Container>
        </Fragment>
    )
}

export default Imobi