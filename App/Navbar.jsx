import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    return(
    <nav className="bg-white p-4 font-semibold ">
        <NavLink className="border-b-4 p-4 border-transparent" activeClassName=" border-indigo-600" to="/Productos">Productos</NavLink>
    </nav>
    )

}

export default Navbar;