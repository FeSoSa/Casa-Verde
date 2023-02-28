import React from "react";
import './styles.css'
import { HowBuy } from "./styled";

const Info = () => {
    return (
        <HowBuy className="InfoConteiner">
            <img className="LeafBackground" src="/images/LeafBackground.png" />
            <div className="InfoInfo">
                <h6>
                    <p>Como Conseguir</p><br />
                    <strong>minha planta</strong>
                </h6>
                <div className="InfoOption">
                    <img className="YellowBall" src="/images/YellowBall.png" />
                    <p>Escolha suas plantas</p>
                </div>
                <div className="InfoOption">
                    <img className="YellowBall" src="/images/YellowBall.png" />
                    <p>Faça seu pedido</p>
                </div>
                <div className="InfoOption">
                    <img className="YellowBall" src="/images/YellowBall.png" />
                    <p>Aguarde na sua casa</p>
                </div>
            </div>


        </HowBuy>
    );
}
export default Info