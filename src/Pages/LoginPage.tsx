import Header from "../Components/Header";
import Login from "../Components/Login";
import NavBar from "../Components/NavBar";
import React from "react";

export function LoginPage(){
    return(
        //1. Header
        //2. LoginFormular
        <div className="loginpage">
            <Header title="Anmelden"/>
            <NavBar />
            <Login />
        </div>
    )
}