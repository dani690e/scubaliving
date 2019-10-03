import React from 'react';
import Produkt from './Produkt';
import { NavLink } from 'react-router-dom';

const Produkter = (props) => {
    return (
        <section className="container-fluid">
            <div className="w-100 bg-gray-100 my-5">
                <div className="w-50 bg-black text-white p-2">
                    <h2 className="pl-5 text-uppercase">Mest Populære Dykkerudstyr</h2>
                </div>
            </div>
            <Produkt antal={props.antal} />
            <NavLink className="text-uppercase text-center display-4 d-flex justify-content-center p-5 text-black" to="/dykkerudstyr">Se mere lækkert udstyr her!</NavLink>
        </section>
    );
}

export default Produkter;