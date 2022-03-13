import React from "react";
import "./enter.css"

function Entrada() {
    return (
        <div>
            <h1>Entrada</h1>
            <form>
                <div className="label-float">
                    <input type="text" className="input" name="cod" placeholder=" "/>
                    <label htmlFor="cod">Codigo</label>
                </div>
                <div className="label-float">
                    <input type="text" className="input" name="qtd" placeholder=" "/>
                    <label htmlFor="qtd">Quantidade</label>
                </div>
            </form>

            
            {/* <div id="lista">
                <ul id="colunas">
                    <li>
                        <p className="cod">cod</p>
                        <p className="desc">Descrição</p>
                        <p className="qtd">Quantidade</p>
                        <p className="fab">Fabricante</p>
                    </li>
                </ul>
                <ul className="itens">
                    <li>
                        <p className="cod">123</p>
                        <p className="desc">material de construção da casa pereira</p>
                        <p className="qtd">8000</p>
                        <p className="fab">madereira Plast</p>
                    </li>
                </ul>
                <ul className="itens">
                    <li>
                        <p className="cod">123</p>
                        <p className="desc">porta sanfonada</p>
                        <p className="qtd">8000</p>
                        <p className="fab">madereira Plast</p>
                    </li>
                </ul>
                <ul className="itens">
                    <li>
                        <p className="cod">123</p>
                        <p className="desc">porta sanfonada</p>
                        <p className="qtd">8000</p>
                        <p className="fab">madereira Plast</p>
                    </li>
                </ul>
            </div> */}
        </div>


    )
}
export default Entrada;