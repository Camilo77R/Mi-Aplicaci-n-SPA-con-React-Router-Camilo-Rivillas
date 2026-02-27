import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/servicios">Servicios</NavLink></li>
                <li><NavLink to="/portafolio">Portafolio</NavLink></li>
                <li><NavLink to="/soporte">Soporte</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;