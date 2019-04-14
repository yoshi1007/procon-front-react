import axios from 'axios';

export const URL = "https://judgeapi.u-aizu.ac.jp"

export const myHttpClient = axios.create({
  'Access-Control-Allow-Origin':'*'
})
