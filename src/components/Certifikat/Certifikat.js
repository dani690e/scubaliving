import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Certifikat = () => {
    const [certifikater] = useState([
        {id: 1, img: "padi.png", title:"Tag et internationalt anerkendt dykkercertifikat", text: "Her finder duet stort udvalg af dykkerkurser lige fra begynder til professionel. Vi er et af Danmarks førende dykkercentre, som uddanner fra PADI orginisationen. Når du vælger at tage et dykkercertifikat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til markedets bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top.", billedetext: "Vi har kompetente instruktører på vores dykkerkursus. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar med et stort hold af kompetente instruktører."}
    ])

    const certifikatListe = certifikater.map(certifikat => {
        return (
            <section className="col-12" key={certifikat.id}>
                <div className="row border ml-0 p-4">
                    <div className="col-sm-12 col-md-8 p-2 p-4">
                        <h1 className="text-uppercase">{certifikat.title}</h1>
                        <p className="pt-3">{certifikat.text}</p>
                        <p>{certifikat.billedetext}}</p>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex justify-content-center p-4">
                        <img src={"img/certifikater/" + certifikat.img} alt={certifikat.title} className="img-fluid"/>
                    </div>
                </div>
            </section>
        )
    })
    return (
        <section className="container-fluid">
            <div className="w-100 bg-gray-100 my-5">
                <div className="w-50 bg-black text-white p-2">
                    <h2 className="pl-5 text-uppercase">Padi - dykkercertifikat</h2>
                </div>
            </div>
            <section className="row">
                {certifikatListe}
            </section>
            <NavLink className="text-uppercase text-center display-4 d-flex justify-content-center p-5 text-black" to="/dykkerkurser">Se alle kurser og certifikater her!</NavLink>
        </section>
    );
}
 
export default Certifikat;