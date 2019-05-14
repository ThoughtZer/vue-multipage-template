import {get, post} from './http.base';

export function getList(params) {
  return get('/api/get/', params);
}

export function submit(params) {
  return post('/api/post/', params);
}
