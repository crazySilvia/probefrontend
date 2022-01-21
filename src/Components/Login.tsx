import {ChangeEventHandler, FormEventHandler, useState} from "react";
import {IUser} from "../Models/User";
import {doLogin} from "../services/api-service";

export default function Login(){
    const [name, setName] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");

    const handleLogin:FormEventHandler<HTMLFormElement> = (event) => {
        const user:IUser={name: name, password: pwd}
        //todo login

        //leert values
        setName("")
        setPwd("")
        event.preventDefault();
    };

    const handleChangeName:ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.currentTarget.value);
    };

    const handleChangePwd:ChangeEventHandler<HTMLInputElement> = (event) => {
        setPwd(event.currentTarget.value);
    };




    return(
        <form onSubmit={handleLogin}>
            <label> Username
                <input type="text"
                       value={name}
                       onChange={handleChangeName} />
            </label>
            <label> Password
                <input type="text"
                    value={pwd}
                    onChange={handleChangePwd} />
            </label>
            <button onClick={doLogin}>Login</button>
        </form>
    )
}