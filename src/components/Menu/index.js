import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/privietflix.png";
import "./menu.css";
import Button from "./../Button";


export default function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="PrivietFlix logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )   
}