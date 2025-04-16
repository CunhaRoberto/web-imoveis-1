import styled from "styled-components"

export const Container = styled.div`
  padding: 30px 175px;
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background color: var(--white);
`
export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 200px;
  }
`
export const Menu = styled.div`
 ul{
   display: flex;
   list-style: none;
  justify-content: space-between;
  align-items: center;
  li{
    border: 1px solid var(--gray);
    border-radius: 10px;
    padding: 10px;
     span{
       font-size: 1.2rem;
       font-height: 300px;
      }
       
      &:hover{
        background-color: var(--gray);
        cursor: pointer;       
       }
    }
  
  }
`