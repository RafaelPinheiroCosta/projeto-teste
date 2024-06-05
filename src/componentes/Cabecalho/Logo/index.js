import React from "react";
import imgLogo from "../../../imagens/logoSenai.png";
import "./style.css"

function Logo(){
    return(
        <div id="logo">
                <img id="imgLogo" src={imgLogo} alt=""/>
                <h4 id="textoLogo">"Anchieta"</h4>
        </div>
    );
}
export default Logo;