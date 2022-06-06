import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const   token = localStorage.getItem('access')
console.log(token);
export const AxiosAuth = axios.create({

  baseURL: 'http://localhost:8000/',
  headers: { Authorization: `Bearer ${token}` },
});

