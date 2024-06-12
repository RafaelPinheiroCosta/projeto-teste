import React from "react";
import styled from "styled-components";

const CardProdutoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 250px;
    background-color: gray;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 10px;    
`
const NomeProduto = styled.h3`

`
const PrecoProduto = styled.h4`

`
const DescricaoProduto = styled.p`

`
const ImgProduto = styled.img`
    width: 90%;
`
function CardProduto({
                        nomeProduto,
                        precoProduto,
                        descricaoProduto,
                        imgProduto
                    }){
    return(
        <CardProdutoContainer>
            <ImgProduto src= {imgProduto}/>
            <NomeProduto>{nomeProduto}</NomeProduto>
            <PrecoProduto>{precoProduto}</PrecoProduto>
            <DescricaoProduto>{descricaoProduto}</DescricaoProduto>                   
        </CardProdutoContainer>
    );
}
export default CardProduto;