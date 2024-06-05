import React from "react";
import Icones from "./Icones";
import Logo from "./Logo";
import Menu from "./Menu";
import './style.css';

function Cabecalho(){
    return(
        <header id="cabecalho">            
            <Logo/>
            <Menu/>
            <Icones/>
        </header>
    );
}
export default Cabecalho;