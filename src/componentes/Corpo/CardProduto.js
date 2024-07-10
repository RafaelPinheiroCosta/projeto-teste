import React from "react";
import styled from "styled-components";

const CardProdutoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 280px;
    background-color: rgb(213, 170, 137);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 18px;    
`
const NomeProduto = styled.h3`
    color: ${props => props.corNomeProduto || "blue"};
`
const PrecoProduto = styled.h4`

`
const DescricaoProduto = styled.p`

`
const ImgProduto = styled.img`
    width: 75%;
    border-radius: 100px;
`
function CardProduto({
                        nomeProduto,
                        precoProduto,
                        descricaoProduto,
                        imgProduto,
                        corNomeProduto
                    }){
    return(
        <CardProdutoContainer>
            <ImgProduto src= {imgProduto}/>
            <NomeProduto corNomeProduto = {corNomeProduto}>{nomeProduto}</NomeProduto>
            <PrecoProduto>{precoProduto}</PrecoProduto>
            <DescricaoProduto>{descricaoProduto}</DescricaoProduto>                   
        </CardProdutoContainer>
    );
}
export default CardProduto;