import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://anapioficeandfire.com/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;

//Token not required in this task scenario
let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};


const Tags = {
  getAll: () => requests.get('/characters')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const Articles = {
  all: page =>
    requests.get(`/characters?${limit(10, page)}`),
  get: slug =>
    requests.get(`/characters/${slug}`),
};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/characters/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/characters/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/characters/${slug}`)
};

export default {
  Articles,
  Comments,
  Tags,
  setToken: _token => { token = _token; }
};
