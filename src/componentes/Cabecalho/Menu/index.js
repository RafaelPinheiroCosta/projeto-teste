import React from "react";
import styled from "styled-components";

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
                <li>Home</li>
                <li>Produto</li>
                <li>Cadastrar Produto</li>
        </MenuConteiner> 
    );
}
export default Menu;