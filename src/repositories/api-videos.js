import config from '../config';

const URL_VIDEOS = `${config.URL_API}/videos`;

function create(videos) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(videos),
  }).then(async (data) => {
    if (data.ok) {
      const response = await data.json();
      return response;
    }
    throw new Error('Ocorreu um erro inesperado: ()');
  });
}

export default {
  create,
};
