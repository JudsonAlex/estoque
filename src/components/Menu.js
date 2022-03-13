import React from "react";
import {Link} from 'react-router-dom'

import "./menu.css"


function Menu() {
    return (
        <div className="menu">
            <Link to="/cadastro">
                <button id="cad" className="menuButton">Cadastro</button>
            </Link>
            <Link to="/entrada">
                <button id="up" className="menuButton">Entrada</button>
            </Link>
            <Link to="saida">
                <button id="down" className="menuButton">Saída</button>
            </Link>

            
        </div>
    )
}
export default Menu;