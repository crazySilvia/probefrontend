import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import {LoginPage} from "./Pages/LoginPage";
import {RegisterPage} from "./Pages/RegisterPage";
import {UserPage} from "./Pages/UserPage";

function App(){
  return(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/userpage" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;

