import React from "react";
import './styles.css'

const menu = () => {
    return(
        <div className="menu">
            <div className="logo">
                <a href="/">
                    <img src="/images/leaf.png" alt="logo" width={20}/>
                    <img src="/images/Group.png" alt="Casa verde" width={100}/>
                </a>
            </div>
            <nav className="links">
                <li>
                    <a href="/">Como fazer</a>
                    /
                </li>
                <li>
                    <a href="/">Ofertas</a>
                    /
                </li>
                <li>
                    <a href="/">Depoimentos</a>
                    /
                </li>
                <li>
                    <a href="/">Vídeos</a>
                    /
                </li>
                <li>
                    <a href="/">Meu Carrinho</a> 
                </li>
            </nav>


        </div>
    );
}
export default menu;