import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import  Header from "../components/Header";
import  Footer from "../components/Footer";
import Error from "../pages/Error";
import Cadastro from "../pages/Cadastro";
import Imobi from "../pages/Imobi";
import Login from "../pages/Login";

const RouterApp = () => {
    return (
       <BrowserRouter>
       <Header />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/home" element={<Home />} />
             <Route path="*" element={<Error />} />
             <Route path="/imobi" element={<Imobi />} />
             <Route path="/cadastro" element={<Cadastro />} />
             <Route path="/login" element={<Login />} />
         </Routes>
         <Footer />
       </BrowserRouter>
        
    )
}

export default RouterApp;