import React from "react";
import imgLogin from "../../../imagens/imgLogin.png";
import imgPesquisa from "../../../imagens/imgPesquisa.png";
import styled from "styled-components";

const IconesContainer = styled.div`
    width: 10%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    #imgLogin, #imgPesquisa{
        height: 90%;
        margin: 10px;
    }
`
function Icones() {
    return (
        <IconesContainer>
            <img id="imgLogin" src={imgLogin} alt="" />
            <img id="imgPesquisa" src={imgPesquisa} alt="" />
        </IconesContainer>
    );
}
export default Icones;