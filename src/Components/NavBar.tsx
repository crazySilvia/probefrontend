import {Link} from "react-router-dom";


export default function NavBar() {

    return (
        <div className={"navBar"}>
            <Link to={"/"}>
                <input type="button" value={"Login"}  />
                <input type="button" value={"Registrieren"}/>
            </Link>
        </div>
    )
}