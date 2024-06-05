import React from "react";
import imgLogin from "../../../imagens/imgLogin.png";
import imgPesquisa from "../../../imagens/imgPesquisa.png";

function Icones() {
    return (
        <div id="icones">
            <img id="imgLogin" src={imgLogin} alt="" />
            <img id="imgPesquisa" src={imgPesquisa} alt="" />
        </div>
    );
}
export default Icones;