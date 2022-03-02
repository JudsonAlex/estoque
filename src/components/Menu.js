import React from "react";
import {Link} from 'react-router-dom'

import "./menu.css"


function Menu() {
    return (
        <div class="menu">
            <Link to="/cadastro">
                <button id="cad">Cadastro</button>
            </Link>
            <Link to="/entrada">
                <button id="up">Entrada</button>
            </Link>
            <Link to="saida">
                <button id="down">Saída</button>
            </Link>
            
            
        </div>
    )
}
export default Menu;