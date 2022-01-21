import "../Pages/Mainpage.css"
import Header from "../Components/Header";
import React from "react";
import {Link} from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import NavBar from "../Components/NavBar";

export default function Mainpage(){
    //1. Header
    //2. Loginformular
    //3. Registrierformular
    return(
        <div className="mainpage">
            <Header title="Zettel"/>
            <NavBar />

        </div>
    )
}

//<Sidebar />
//<Link to="login">Login</Link>
//<Link to="register">Registrieren</Link>