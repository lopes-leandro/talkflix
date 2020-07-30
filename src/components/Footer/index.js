import React from "react";
import {FooterBase} from "./style";
import Logo from "./../../assets/img/privietflix.png";

export default function Footer() {
    return (
        <FooterBase>
            <a href="https://www.alura.com.br">
            <img className="Logo" src={Logo} alt="PrivietFlix logo"/>
            </a>
            <p>
                Orgulhosamente criado durante a
                {' '}
                <a href="https://www.alura.com.br">
                    Imersão React da Alura
                </a>
            </p>
        </FooterBase>
    );
}