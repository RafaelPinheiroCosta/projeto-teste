import React from "react";
import imgLogo from "../../../imagens/logoSenai.png";
import styled from "styled-components";

const LogoContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    #imgLogo{
        width: 100%;
    }
    #textoLogo{
        margin: 0;
        padding: 0;
        font-size: 20px;
    }
`
function Logo(){
    return(
        <LogoContainer>
                <img id="imgLogo" src={imgLogo} alt=""/>
                <h4 id="textoLogo">"Anchieta"</h4>
        </LogoContainer>
    );
}
export default Logo;