import axios from "axios";
console.log(localStorage.getItem('access'));
export const AxiosAuth = axios.create({

  baseURL: 'http://localhost:8000/',
  headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
});

