import React from "react";
import './styles.css'
import Card from "../card";




const Ofertas = (items) => {
    console.log(items.items.items.Ofertas)
    return (
        <div className="Ofertas">
            <div>
                <h5>
                    <p>Conheça nossas</p><br />
                    <strong>Plantas</strong>
                </h5>
            </div>
            <div className="CardField">
                {items.items.items.Ofertas.length> 0 && items.items.items.Ofertas.map((item, key) => (
                    <Card item={item} key={key}/>
                ))}
            </div>

        </div>

    );
}

export default Ofertas