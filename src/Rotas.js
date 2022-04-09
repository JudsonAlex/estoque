
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/dashboard/Dashboard"
import Enter from "./pages/entrada/Enter"
import Exit from "./pages/exit/Exit"
import Cadastro from "./pages/cadastro/Cadastro"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/entrada" element={<Enter/>}/>
                <Route path="/saida" element={<Exit/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;