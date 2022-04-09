import { Link } from "react-router-dom";
import './dashboard.css'

function Dashboard(){
    return(
        <>
            <nav className="logo">Logo</nav>
            <div className="content">
                <MenuLateral /> {/* A fazer*/}
                <main>
                    <Apresentation />
                </main>
            </div>
        </>
    )
}

function MenuLateral(){
    return(
        <nav className="nav">
            <Link className="links" to="/">DASHBOARD</Link>
            <Link className="links" to="/cadastro">CADASTRO</Link>
            <Link className="links" to="/entrada">ENTRADA</Link>
            <Link className="links" to="/saida">SAIDA</Link>
        </nav>
    )
}

function Apresentation(){
    return(
        <>
            <h1>Dashboard</h1>
            <h4>Visão geral do estoque</h4>
            <div className="statistcs">
                <div className="stats" id="cadastrados">42 produtos cadastrados</div>
                <div className="stats" id="alerta">42 produtos com estoque baixo</div>
                <div className="stats" id="zero">42 produtos com estoque zerado</div>
            </div>
            <div>
                <div>Produtos com mais saída</div>
                <div>Produtos com menos saída</div>
            </div>
        </>

    )
}

export default Dashboard;