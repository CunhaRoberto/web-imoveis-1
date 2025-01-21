import { createGlobalStyle } from "styled-components";

   export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
      :root{
        --primary: #F7F9FC;
        --secondary: #15181C;
        --gray:rgb(138, 137, 137);
        --blue: #4766FF;
        --white: #FFF;
    } 

    body{
       background-color: var(--primary);
       color: var(--secondary);
       font-size: 1.2rem;
        font-weight: 400;
   } 
   ul{list-style-type:nome;}
   a{text-decoration: none;}
  `
