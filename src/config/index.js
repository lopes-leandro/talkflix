const URL_API = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://talkflix.herokuapp.com';

export default {
  URL_API,
};
