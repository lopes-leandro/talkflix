import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMaster from '../../../components/LayoutMaster';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForms';

export default function CadastroCategoria() {
  const fields = {
    id: 0,
    title: '',
    description: '',
    color: '#FFFFFF',
  };
  const [categories, setCategories] = useState([]);
  const { values, changeField, clearForn } = useForm(fields);

  function submitHandler(event) {
    event.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);
    clearForn(fields);
  }

  useEffect(() => {
    const URL_API = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://talkflix.herokuapp.com/categories';
    fetch(URL_API).then(async (data) => {
      const response = await data.json();
      setCategories([
        ...response,
      ]);
    });
  }, []);

  return (
    <LayoutMaster>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={submitHandler}>
        <FormField
          label="Nome da Categoria"
          value={values.title}
          onChange={changeField}
          type="text"
          name="title"
        />
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
          name="description"
        />
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
          name="color"
        />
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
        <Button>
          Cadastrar
        </Button>
      </form>
      {
          categories.length === 0 && (
          <div>
            Loading...
          </div>
          )
      }
      <ul>
        {
            categories.map((category) => (
              <li key={`${category.title}`}>
                {category.title}
              </li>
            ))
        }
      </ul>
      <Link to="/">
        Voltar
      </Link>
    </LayoutMaster>
  );
}
