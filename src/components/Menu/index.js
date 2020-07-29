import React from "react";
import Logo from "./../../assets/img/privietflix.png";
import "./menu.css";

export default function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da PrivietFlix"/>
            </a>
            <a className="ButtonLink" href="/">Novo Vídeo</a>
        </nav>
    )   
}