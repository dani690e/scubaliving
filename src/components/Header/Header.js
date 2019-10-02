import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.svg';

const Header = () => {
    return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="/"><img className="w-50" src={logo} alt="logo"></img></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dykkerudstyr">Dykkerudstyr</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dykkerrejser">Dykkerrejser</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dykkerkurser">Dykkerkurser</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/kontakt">Kontakt</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/om-os">Om os</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control bg-gray-100 rounded-0" type="search" aria-label="Search" />
                        <button className="btn btn-outline-gray-200 text-gray-300 my-2 my-sm-0 rounded-0" type="submit">Søg</button>
                    </form>
                    <div className="nav-item nav-link">
                        <NavLink className="text-white" to="/login"><i className="fas fa-lock d-inline p-2 bg-black text-white"></i><p className="d-inline p-2 bg-gray-300">Login</p></NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;