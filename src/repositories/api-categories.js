import config from '../config';

const URL_CATEGORIES = `${config.URL_API}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (data) => {
    if (data.ok) {
      const response = await data.json();
      return response;
    }
    throw new Error('Ocorreu um erro inesperado: ()');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (data) => {
    if (data.ok) {
      const response = await data.json();
      return response;
    }
    throw new Error('Ocorreu um erro inesperado: ()');
  });
}

export default {
  getAllWithVideos, getAll,
};
