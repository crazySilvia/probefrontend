import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import React from "react";


export function RegisterPage(){
    return(
        //1. Header
        //2. RegisterFormular
        <div className="registerpage">
            <Header title="Registrieren" />
            <NavBar />
        </div>
    )
}