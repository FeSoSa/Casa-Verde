import React from "react";
import './styles.css'

const Card = (items) => {
    return(
        <div className="conteiner">
            <img src={`/images/plants/${items.item.Img}.png`} alt="Foto da Planta"/>
            <div className="CardInfo">
                <h6>
                    {items.item.Title}
                </h6>
                <p>
                    {items.item.Price}
                </p>
                <a href="/">
                    Comprar &rarr;
                </a>
            </div>
        </div>
    );
}
export default Card