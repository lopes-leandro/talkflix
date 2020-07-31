import React, {useState} from "react";
import { Link } from "react-router-dom";
import LayoutMaster from "./../../../components/LayoutMaster";
import FormField from "../../../components/FormField";

export default function CadastroCategoria() {

    const fields = {
        title: '',
        description: '',
        color: '#FFFFFF',
    };
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(fields);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function changeField(event) {
        const {name, value} = event.target;
        setValue(
            name, 
            value,
        );
    }

    function submitHandler(event) {
        event.preventDefault();
        setCategories([
            ...categories,
            values
        ]);
        setValues(fields);
    }

    return (
        <LayoutMaster>
            <h1>Cadastro de Categoria</h1>
            <form onSubmit={submitHandler}>
                <FormField 
                    label="Nome da Categoria" 
                    value={values.title} 
                    onChange={changeField}
                    type="text"
                    name="title"/>
                {/* <div>
                    <label>
                        Nome da Categoria:
                        <input 
                            type="text"
                            name="title"
                            value={values.title}
                            onChange={changeField}/>
                    </label>
                </div> */}
                <FormField 
                    label="Descrição" 
                    value={values.description} 
                    onChange={changeField}
                    type="textarea"
                    name="description"/>
                {/* <div>
                    <label>
                        Descrição:
                        <textarea 
                            type="text"
                            name="description"
                            value={values.description}
                            onChange={changeField}/>
                    </label>
                </div> */}
                <FormField 
                    label="Cor" 
                    value={values.color} 
                    onChange={changeField}
                    type="color"
                    name="title"/>
                {/* <div>                
                    <label>
                        Cor:
                        <input 
                            type="color"
                            name="color"
                            value={values.color}
                            onChange={changeField}/>
                    </label>
                </div>         */}
                <button>
                    Cadastrar
                </button>
            </form>
            <ul>
                {
                    categories.map((category, index) => {
                        return (
                            <li key={`${index}`}>
                                {category.title}
                            </li>
                        )
                    })
                }
            </ul>
            <Link to="/">
                Voltar
            </Link>
        </LayoutMaster>
    )
}