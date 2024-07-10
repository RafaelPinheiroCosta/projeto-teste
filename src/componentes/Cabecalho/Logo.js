import React from "react";
import imgLogo from "../../imagens/Horizon (1).png";
import styled from "styled-components";

const LogoContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    #imgLogo{
      border-radius: 999px;
      
      height: 180px;
    }
    #textoLogo{
        margin: 0;
        padding: 0;
        font-size: 20px;
        color: #000;
    }
`
function Logo(){
    return(
        <LogoContainer>
                <img id="imgLogo" src={imgLogo} alt=""/>
        </LogoContainer>
    );
}
export default Logo;