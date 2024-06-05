import React from "react";
import imgLogo from "../../imagens/logoSenai.png";
import Icones from "./Icones";
import './style.css';

function Cabecalho(){
    return(
        <header id="cabecalho">

            <div id="logo">
                <img id="imgLogo" src={imgLogo} alt=""/>
                <h4 id="textoLogo">"Anchieta"</h4>
            </div>

            <ul id = "menu">
                <li>Home</li>
                <li>Produto</li>
                <li>Cadastrar Produto</li>
            </ul>          
            <Icones/>
        </header>
    );
}
export default Cabecalho;