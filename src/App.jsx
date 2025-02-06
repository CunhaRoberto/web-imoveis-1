//import Banner from "./components/Banner";
import Header from "./components/Header";
import Global from "./styles/Global";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Imobi from "./pages/Imobi";
import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Cadastro from "./components/Cadastro";

function App() {
  return (
    <div>
      <Header />
      <Cadastro />
      <Login />
      {/* <Imobi /> */}
      {/* <Banner />*/}
     {/* <Home />  */}
      <Footer />
      <Global />
    </div>
  );
};

export default App;
