import React from "react";
import styled from "styled-components";

const textoOpcoes = ["Home", "Produto", "Cadastrar Produto", "teste", "qqq"];

const MenuConteiner = styled.ul`
     width: 40%;
    display: flex;    
    color: wheat;
    li{
        list-style: none;
        font-size: 30px;
        font-weight: bold;
        margin: 0 15px;
    }
`
function Menu() {
    return (
        <MenuConteiner>
            {
                textoOpcoes.map( (opcao) => (
                    <li>{opcao}</li>
                )) 
            }
        </MenuConteiner>
    );
}
export default Menu;