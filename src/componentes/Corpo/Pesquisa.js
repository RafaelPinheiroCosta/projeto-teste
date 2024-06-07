import React from "react";
import styled from "styled-components";
import { useState } from "react";

const PesquisaContainer = styled.section`
    margin: 0;
    display: flex;
    flex-direction: column;
`
function Pesquisa(){
    const [produtoDigitado, setProdutoDigitado] = useState('');

    return(
        <PesquisaContainer>
            <h2>Pesquise seu produto aqui</h2>
            <input 
                placeholder="Digite o produto" 
                onBlur={evento => setProdutoDigitado(
                    evento.target.value
                )}
            />
            <p>{produtoDigitado}</p>
        </PesquisaContainer>
    );
}
export default Pesquisa