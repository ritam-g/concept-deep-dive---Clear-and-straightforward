import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Nav
