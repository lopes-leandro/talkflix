import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMaster from '../../../components/LayoutMaster';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForms';
import Icon from '../../../components/Icones';

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
        <FormField
          label="Descrição"
          value={values.description}
          onChange={changeField}
          type="textarea"
          name="description"
        />
        <FormField
          label="Cor"
          value={values.color}
          onChange={changeField}
          type="color"
          name="color"
        />
        <Button>
          <Icon.PlusIcon
            fill="#fff"
            width={18}
          />
          Cadastrar
        </Button>
        <Button as={Link} to="/">
          <Icon.BackIcon
            fill="#fff"
            width={18}
          />
          Voltar
        </Button>
      </form>
      {
          categories.length === 0 && (
          <div>
            Loading...
          </div>
          )
      }
      {/* <ul>
        {
            categories.map((category) => (
              <li key={`${category.title}`}>
                {category.title}
              </li>
            ))
        }
      </ul> */}
      {
      categories.length >= 1 && (
        <table style={{ width: '100%', paddingTop: '2%' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #f9f9f9' }}>
              <th scope="col">Título</th>
              <th scope="col">Descrição</th>
              <th scope="col">Cor</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {
              categories.map((category) => (
                <tr>
                  <td>{category.title}</td>
                  <td>{category.link_extra.text}</td>
                  <td><input type="color" aria-disabled="false" disabled="false" style={{ width: '100%' }} value={category.color} /></td>
                  <td>
                    <Link to="/">
                      <Icon.PencilIcon
                        fill="#fff"
                        width={18}
                      />
                    </Link>
                    <Link to="/">
                      <Icon.MinusIcon
                        fill="#fff"
                        width={18}
                      />
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )
    }
    </LayoutMaster>
  );
}
