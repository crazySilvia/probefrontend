import React from "react";

export interface IUser{
    id?: string
    name: string
    password: string
}

interface UserProps {
    isLoggedIn: boolean
    user: IUser
    index: number
}

export default function User(props:UserProps){
    const {name, password}=props.user
    return(
        <p>
            {name}{password}
        </p>
    )
}