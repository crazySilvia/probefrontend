import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import {Liste} from "../Models/Liste";

export function UserPage(){
    return(
        <div className="userpage">
            <NavBar />
            <Header title="Übersicht"></Header>
            <Liste />
        </div>
    )
}