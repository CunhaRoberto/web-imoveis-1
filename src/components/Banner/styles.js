import styled from "styled-components"
import imagem from "../../assets/imagem/casa_2.webp"

export const Conteiner = styled.div`
padding: 200px 150px;
position: relative;
background-size: cover;
background-position: center;
background-image: url(${imagem});
 :before{
    background-color: rgba(0,0,0,.6);
    content: '';
    position:absolute;
    top: 0;
    left: 0;
    widht: 100%;
    height: 100%;
    z-index: 1;
}
 `
export const Text = styled.div`
    width: 55%;
    position: relative;
    z-index: 1;
    h2{
    color: var(--white);
    font-size: 62px;
    font-weight:700;
    margin-bottom: 35px;
}
    p{
    color: var(--white);
    margin-bottom: 25px;
    font-size: 40px;
}
    span {
  background-color: var(--blue);
  border: 0;
  color: var(--white);
  font-size: 20px;
  font-weight: 600;
  padding: 12px 120px;
  line-height: 24px;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 15px;
  }

`