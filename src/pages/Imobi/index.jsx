import React, { Fragment } from "react";
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from "./styled";
import TopBanner from "../../components/TopBanner";

const Imobi = ( ) => {
    return (
        <Fragment> 
         <TopBanner />            
         <Container>
            <Left>
                <Thumb>
                    <img src="https://www.toziimoveis.com.br/assets/blog/9-1e397c7a9726cbf88244bccb62cc5247.jpg" alt="" />
                </Thumb>
            <Description>
            <p>   Imóvel  pertence  a  Roberto  Aparecido  da  Cunha,  Rua  Roney  Gomes  barbosa,  número  1114</p>
            </Description>
            </Left>
            <Right>
                <Profile>
                  <ProfileImg>
                    <img src="https://i.pinimg.com/736x/a8/da/22/a8da222be70a71e7858bf752065d5cc3.jpg" alt="" />
                  </ProfileImg>
                  <ProfileDescription>
                    <h3>Roberto Cunha</h3>
                    <p>Descrição do usuário</p>
                  </ProfileDescription>
                </Profile>
                <ProfileContact>
                    <h3>Informações para contato:</h3>
                    <p>(11) 94799-3421</p>
                    <p>arthurcunha1114@gmail.com</p>
                </ProfileContact>
                <ProfileFormContact>
                  <h3>Contate o anunciante</h3>
                  <form>
                    <input type="text" name="" id=""></input>
                    <p></p>
                    <input type="text" name="" id=""></input>
                    
                    <textarea name="" id="" cols="30" rows="10" />
                    <button>Enviar mensagem</button>
                  </form>
                </ProfileFormContact>
            </Right>
         </Container>
        </Fragment>
    )
}

export default Imobi