import axios from 'axios';
import ENV from 'config';

export const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': false,
    crossorigin: true,
  },
  url: 'http://localhost:4000/api',
});
