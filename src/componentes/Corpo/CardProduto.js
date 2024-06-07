import React from "react";
import styled from "styled-components";
import { produtos } from "../../produtosCadastrados";

const CardProdutoContainer = styled.div`
    height: 100px;
    width: 150px;
    background-color: gray;
`
function CardProduto(){
    return(
        <CardProdutoContainer>
            {
                produtos.map( (produto) => (
                    <>
                        <img id="e" src={produto.img} alt=""/>
                        <h3>{produto.nome}</h3>
                    </>
                ))
            }
        </CardProdutoContainer>
    );
}
export default CardProduto;