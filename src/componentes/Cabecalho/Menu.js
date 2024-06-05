import React from "react";
import styled from "styled-components";

const textoOpcoes = ["Home","Produto","Cadastrar Produto", "teste"];

const MenuConteiner = styled.ul`
     width: 40%;
    display: flex;    
    li{
        list-style: none;
        font-size: 30px;
        font-weight: bold;
        margin: 0 15px;
    }
`
function Menu(){
    return(
        <MenuConteiner>
                <li>{textoOpcoes[0]}</li>
                <li>{textoOpcoes[1]}</li>
                <li>{textoOpcoes[2]}</li>
        </MenuConteiner> 
    );
}
export default Menu;