import { Link } from "react-router-dom"
import "./cadastro.css"
function Cadastro(){
    function cancelar(){
        const btnCancel = document.getElementById('cadastro')
        

        btnCancel.addEventListener('submit', e =>{
            e.preventDefault()
        })        
    }

    function salvar(){
        const btnSave = document.getElementById('cadastro')
        btnSave.addEventListener('submit', e =>{
            e.preventDefault()
        })
    }

    return (
        <form id="cadastro">
            <fieldset>
                <legend>Dados</legend>

                <div className="label-float">
                    <input name="cadastro" className="input" placeholder=" "/>
                    <label htmlFor="cadastro">codigo</label>
                </div>

                <div className="label-float">
                    <input name="descricao" className="input" placeholder=" "/>
                    <label htmlFor="descricao">descrição</label>
                </div>

                <div className="label-float">
                    <input name="localizacao" className="input" placeholder=" "/>
                    <label htmlFor="localizacao">localização</label>
                </div>

                <div className="label-float">
                    <input name="fabricante" className="input" placeholder=" "/>
                    <label htmlFor="fabricante">fabricante</label>
                </div>

                <div className="label-float">
                    <input name="quantidade" className="input" placeholder=" "/>
                    <label htmlFor="quantidade">quantidade</label>
                </div>

            </fieldset>
            <div id="btn">
                <Link to="/"><button className="cadActions" id="cancel" onClick={cancelar}>Cancelar</button></Link>
                <button className="cadActions" id="salvar" onClick={salvar}>Salvar</button>
            </div>
            
        </form>     
    )
}

export default Cadastro;