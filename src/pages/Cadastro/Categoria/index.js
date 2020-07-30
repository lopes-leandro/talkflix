import React from "react";
import { Link } from "react-router-dom";
import LayoutMaster from "./../../../components/LayoutMaster";

export default function CadastroCategoria() {
    return (
        <LayoutMaster>
            <h1>Cadastro de Categoria</h1>

            <form>
                <label>
                    Nome da Categoria:
                    <input type="text"/>
                </label>
                <button>
                    Cadastrar
                </button>
            </form>
            <Link to="/">
                Voltar
            </Link>
        </LayoutMaster>
    )
}