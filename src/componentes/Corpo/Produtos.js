import React from "react";
import styled from "styled-components";
import {produtos} from "../../produtosCadastrados";
import CardProduto from "./CardProduto";

const ProdutosContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    width: 80%;
    margin: 20px;
    gap: 20px;
`
const CardProdutosContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap:20px
`
function Produtos(){
    return(
        <ProdutosContainer>
            <CardProdutosContainer>
                {
                    produtos.map( produto =>(
                        <CardProduto
                            nomeProduto={produto.nome}
                            precoProduto={produto.preco}
                            descricaoProduto={produto.descricao}
                            imgProduto={produto.img}
                        />
                    ))
                }
            </CardProdutosContainer>
        </ProdutosContainer>
    );
}
export default Produtos;