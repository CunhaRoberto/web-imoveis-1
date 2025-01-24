import styled from "styled-components";

export const Container = styled.div`
  width: 24%;
  margin-bottom: 12px;
  background-color: var(--white);
  cursor: pointer;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
`
export const Img = styled.div`
    width: 100%;
    img{
    width: 100%;
    height: auto;
    cursor: pointer;
    }
`
export const Description = styled.div`
    padding: 12px;
    a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--secondery);
    }
    h4{
    font-size:1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: pointer;
    }
`
export const Itens = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    span{
    margin-bottom: 10px;
    }
`