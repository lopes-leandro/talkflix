import React from "react";
import { Link } from "react-router-dom";
import LayoutMaster from "./../../../components/LayoutMaster";

export default function CadastroVideo() {
    return (
        <LayoutMaster>
            <h1>Cadastro de Video</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </LayoutMaster>
    )
}