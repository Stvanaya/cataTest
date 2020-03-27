import axios from 'axios';

const cataApi = axios.create({
  baseURL: 'http://180.150.24.215:3006/api/',
});

export function getVendors (url) {
  return cataApi.get(url);
}

export function getProducts (url) {
  return cataApi.get(url);
}

export function getPrices (url) {
  return cataApi.get(url);
};

export function getCategories (url) {
  return cataApi.get(url);
};
