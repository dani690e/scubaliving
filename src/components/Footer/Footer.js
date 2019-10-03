import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container p-2">
                <div className="row p-4">
                    <div className="col-4 ">
                        <h4 className="text-uppercase">Praktiske oplysninger</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-black p-0"><NavLink to="/" className="text-gray-100">Om Scuba Living</NavLink></li>
                            <li className="list-group-item bg-black pl-0"><NavLink to="/" className="text-gray-100">Kontakt</NavLink></li>
                            <li className="list-group-item bg-black pl-0"><NavLink to="/" className="text-gray-100">Handelsbetingelser</NavLink></li>
                            <li className="list-group-item bg-black pl-0"><NavLink to="/" className="text-gray-100">Persondatapolitik</NavLink></li>
                            <li className="list-group-item bg-black pl-0"><NavLink to="/" className="text-gray-100">Åbningstider</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4 className="text-uppercase">Praktiske oplysninger</h4>
                        <ul className="list-group list-group-flush text-gray-100">
                            <li className="list-group-item bg-black pl-0"><NavLink to="/" className="text-gray-100">Hovedkategorier</NavLink></li>
                            <li className="list-group-item bg-black pl-0"><NavLink className="text-gray-100" to="/dykkerudstyr">Dykkerudstyr</NavLink></li>
                            <li className="list-group-item bg-black pl-0"><NavLink className="text-gray-100" to="/dykkerrejser">Dykkerrejser</NavLink></li>
                            <li className="list-group-item bg-black pl-0"><NavLink className="text-gray-100" to="/dykkerkurser">Dykkerkurser</NavLink></li>
                            <li className="list-group-item bg-black pl-0"><NavLink className="text-gray-100" to="/">Service</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4 className="text-uppercase">Sociale Medier - Følg os her:</h4>
                        <ul className="list-group list-group-flush text-gray-100">
                            <li className="list-group-item bg-black pl-0"><a href="/" className="text-gray-100">LinkedIn <i className="fab fa-linkedin"></i></a></li>
                            <li className="list-group-item bg-black pl-0"><a href="/" className="text-gray-100">Facebook <i className="fab fa-facebook-square"></i></a></li>
                            <li className="list-group-item bg-black pl-0"><a href="/" className="text-gray-100">Instagram <i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;