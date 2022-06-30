import axios from "axios";
console.log(localStorage.getItem('access'));
export const AxiosAuth = axios.create({

  baseURL: 'http://54.187.30.101/',
  headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
});

