import Header from "../Components/Header";
import Login from "../Components/Login";

export function LoginPage(){
    return(
        //1. Header
        //2. LoginFormular
        <div className="loginpage">
            <Header title="Anmelden"/>
            <Login />
        </div>
    )
}