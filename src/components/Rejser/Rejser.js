import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Rejser = () => {
    const [rejser] = useState([
        {id: 1, img: "malta.jpg", title: "Malta", text: "Oplev skønne malta og det helt fantastiske dyreliv og sammenhold. Vi arrangere dykkerrejser til malta hele året rundt."},
        {id: 2, img: "norge.jpg", title: "Norge", text: "Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klarest vand i verden!"},
    ])

    const rejseListe = rejser.map(rejse => {
        return (
            <section className="col-md-6" key={rejse.id}>
                <div className="card">
                    <img src={"img/rejser/" + rejse.img} alt={rejse.title} className="card-img-top img-fluid" />
                    <div className="card-body bg-black text-white">
                        <h3 className="card-title">{rejse.title}</h3>
                        <p className="card-text">{rejse.text}</p>
                    </div>
                </div>
            </section>
        )
    })
    return (
        <section className="container-fluid">
            <div className="w-100 bg-gray-100 my-5">
                <div className="w-50 bg-black text-white p-2">
                    <h2 className="pl-5 text-uppercase">Dyk ud i verden</h2>
                </div>
            </div>
            <section className="row">
                {rejseListe}
            </section>
            <NavLink className="text-uppercase display-4 d-flex justify-content-center p-5 text-black" to="#">Se flere destinationer og muligheder her!</NavLink>
        </section>
    );
}
 
export default Rejser;