import React from "react";
import imgLogin from "../../imagens/imgLogin.png";
import imgPesquisa from "../../imagens/imgPesquisa.png";
import styled from "styled-components";
const icones = [imgLogin,imgPesquisa];

const IconesContainer = styled.div`
    width: 10%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    #icone{
        height: 90%;
        margin: 10px;
    }
`
function Icones() {
    return (
        <IconesContainer>
            {   icones.map( (icone) =>(
                        <img id="icone" src={icone} alt="" />
                    )
                )
            }
        </IconesContainer>
    );
}
export default Icones;