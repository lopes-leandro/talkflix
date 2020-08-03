import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LayoutMaster from '../../../components/LayoutMaster';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForms';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/api-videos';
import categoryRepository from '../../../repositories/api-categories';

export default function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitle = categories.map(({ title }) => title);
  const { changeField, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoryRepository
      .getAll()
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <LayoutMaster>
      <h1>Cadastro do Video</h1>
      <Link to="/cadastro/categoria">
        Nova Categoria
      </Link>
      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        // alert('Cadastrado com sucesso!!');

        const findCategory = categories.find((item) => item.title === values.category);
        if (findCategory) {
          videoRepository.create({
            title: values.title,
            url: values.url,
            categoryId: findCategory.id,
          }).then(() => {
            history.push('/');
          });
        }
      }}
      >
        <FormField
          label="Título do Video"
          value={values.title}
          onChange={changeField}
          type="text"
          name="title"
        />
        <FormField
          label="Caminho da Url"
          value={values.url}
          onChange={changeField}
          type="text"
          name="url"
        />
        <FormField
          label="Categoria"
          value={values.category}
          onChange={changeField}
          type="text"
          name="category"
          suggestions={categoryTitle}
        />
        <Button type="submit">
          Salvar
        </Button>
      </form>
    </LayoutMaster>
  );
}
