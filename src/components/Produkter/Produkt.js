import React, { useState } from 'react';

const Produkt = (props) => {
    const [produkter] = useState([
        { id: 1, img: "reg.jpg", title: "Regulator med resist", pris: "899" },
        { id: 2, img: "fine.jpg", title: "Rejsefinne", pris: "999" },
        { id: 3, img: "fine.jpg", title: "Rejsefinne", pris: "999" },
        { id: 4, img: "hanske.jpg", title: "Coldwater gloves", pris: "1499" },
        { id: 5, img: "fine.jpg", title: "Rejsefinne", pris: "9125599" },
        { id: 6, img: "ur.jpg", title: "Ur", pris: "1230" },
        { id: 7, img: "reg.jpg", title: "Regulator med resist", pris: "899" },
        { id: 8, img: "reg.jpg", title: "Regulator", pris: "1200" }
    ])
    
    let antalprodukter = props.antal ? props.antal : produkter.length;

    const produktListe = produkter.slice(0,antalprodukter).map(produkt => {
        return (
            <section className="col-md-3" key={produkt.id}>
                <div className="card">
                    <img src={"img/produkter/" + produkt.img} alt={produkt.title} className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title text-center">{produkt.title}</h3>
                        <p className="card-text text-center">{"KR. " + produkt.pris + ",-"}</p>
                    </div>
                </div>
            </section>
        )
    })
    return (
        <section className="produktListe row">
            {produktListe}
        </section>
    );
}

export default Produkt; 