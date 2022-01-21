import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import {LoginPage} from "./Pages/LoginPage";
import {RegisterPage} from "./Pages/RegisterPage";

function App(){
  return(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;

