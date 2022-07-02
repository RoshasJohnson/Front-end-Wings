import axios from "axios";
console.log(localStorage.getItem('access'));
export const AxiosAuth = axios.create({

  baseURL: 'https://wingsbackend.tk/',
  headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
});

