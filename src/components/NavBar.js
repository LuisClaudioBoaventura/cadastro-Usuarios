import React from 'react';

import {Link } from "react-router-dom";

const NavBar = ()=>{

    return (
        <nav style={{ marginBottom:20 }} className="navbar navbar-dark bg-primary">
            <Link to="/" className="navbar-brand" >Lista de Pessoas</Link>
            <Link to="/addPerson" className="navbar-brand">Adicionar Pessoa</Link>
        </nav>

    );

};
export default NavBar;
