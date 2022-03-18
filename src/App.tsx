import { BrowserRouter } from "react-router-dom";
import { ApplicationRoutes } from "./Routes/index";
import "./global.css";

const App = () => {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  );
};

export default App;
