import React from "react";
import './styles.css'
import Card from "../card";




const Ofertas = (items) => {

    return (
        <div className="Ofertas">
            <div>
                <h5>
                    <p>Conheça nossas</p><br />
                    <strong>Ofertas</strong>
                </h5>
            </div>
            <div className="CardField">
                {items.items.items.length> 0 && items.items.items.map((item, key) => (
                    item.ordem > 0 && <Card item={item} key={key}/>
                ))}
            </div>

        </div>

    );
}

export default Ofertas