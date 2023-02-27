import React from "react";
import './styles.css'

const Card = (items) => {
    return(
        <div className="conteiner">
            <img src={`/images/plants/${items.item.img}.png`} alt="Foto da Planta"/>
            <div className="CardInfo">
                <h6>
                    {items.item.name}
                </h6>
                <p>
                    R$ {items.item.preco}
                </p>
                <a href="/">
                    Comprar &rarr;
                </a>
            </div>
        </div>
    );
}
export default Card