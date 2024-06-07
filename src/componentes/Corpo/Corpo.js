import React from "react";
import styled from "styled-components";
import Pesquisa from "./Pesquisa";

const CorpoContainer = styled.main`
    background-color: darkcyan;
    height: 90vh;
    display: flex;
    justify-content: center;
`
function Corpo(){
    return(
        <CorpoContainer>
            <Pesquisa/>
        </CorpoContainer>
    );
}
export default Corpo;