import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const textoOpcoes = ["Home", "Produto", "Cadastrar Produto"];

const MenuConteiner = styled.ul`
    width: 40%;
    display: flex;
    li{
        list-style: none;
        font-size: 30px;
        font-weight: bold;
        margin: 0 15px;
        color: rgb(58, 41, 30)
    }
`
function Menu() {
    return (
        <MenuConteiner>
            {
                textoOpcoes.map((opcao) => (
                    <Link
                        to={`/${opcao.replace(/\s+/g, '').toLowerCase()}`}
                        style={{
                            color: "#000",
                            textDecoration: 'none'
                        }}
                    >
                        <li>{opcao}</li>
                    </Link>
                ))
            }
        </MenuConteiner>
    );
}
export default Menu;