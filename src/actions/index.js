import axios from 'axios';

// my rails API
export const URL = 'http://localhost:3030';

export const myHttpClient = axios.create({
  'Access-Control-Allow-Origin':'*'
})
