import axios from './axios';

export function get(url, params) {
  return axios.get(url, {params});
}

export function post(url, params) {
  return axios.post(url, params);
}
