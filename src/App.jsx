import { Fragment } from "react";
import Global from "./styles/Global"
import RouterApp from "./routes";

function App() {
  return (
    <div>
      <Fragment>
      <RouterApp />
      <Global />
      </Fragment>
    </div>
  );
};

export default App;
