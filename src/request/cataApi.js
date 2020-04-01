import axios from 'axios';

export const cataApi = axios.create({
  baseURL: 'https://staging.api.munitienda.com/cata/v1/',
});
