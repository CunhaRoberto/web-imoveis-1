import { Fragment } from "react";
import Global from "./styles/Global"
import RouterApp from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Fragment>
        <AppContextProvider>
          <RouterApp />
        </AppContextProvider>
          <Global />
          <ToastContainer />
      </Fragment>
    </div>
  );
};

export default App;
