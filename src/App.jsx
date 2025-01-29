import Banner from "./components/Banner";
import Header from "./components/Header";
import Global from "./styles/Global";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Imobi from "./pages/Imobi";

function App() {
  return (
    <div>
      <Header />
      <Imobi />
      {/* <Banner /> */}
      <Home />
      <Footer />
      <Global />
    </div>
  );
}

export default App;
