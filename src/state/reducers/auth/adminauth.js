import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AXIOS from "../../../axios";

export const adminLogin = createAsyncThunk(
  "ADMIN/Authentication",
  async (data) => {
    console.log("adminDetails", data);
    const response = await axios.post("http://localhost:8000/adminpanel/superuser", {email:"roshas@gmail.com",password:"roshas"});
    console.log("response", response.data);
    return response.data;
  }
);

export const adminRegister = createAsyncThunk(
  "REGISTER/Authentication",
  async (data) => {
    console.log("responseData", data);
     const response = await AXIOS.post("admin/", data);

    return response.data;
  }
);

const localData = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : {};

const loginStatusStorage = localStorage.getItem("loginStatus")
  ? localStorage.getItem("loginStatus")
  : false;

// export const uesrRegister = createAsyncThunk("REGISTER/Authentication",async(data)=>{
//     const response = await AXIOS.post("")
// })

const AdminData = createSlice({
  name: "ADMIN/LOGIN",
  initialState: {
    admin: [],
    loading: false, 
    isAdmin: false,
    error: "",
  },
  reducers: {
    setData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: {
    [adminLogin.fulfilled]: (state, action) => {
      state.admin = action.payload;
      state.loading = false;
      state.isAdmin = true;
      localStorage.setItem("adminAccess", action.payload.jwt.access);
      // localStorage.setItem("refresh", action.payload.jwt.refresh);
      localStorage.setItem("AdminData", JSON.stringify(action.payload));
    },
    [adminLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [adminLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = "Invalid user name or password";
    },
    [adminRegister.fulfilled]: (state, action) => {
      state.admin = action.payload;
      state.loading = false;
      state.isAdmin = true;
      localStorage.setItem("adminAccess", action.payload.jwt.access);
      localStorage.setItem("adminrefresh", action.payload.jwt.refresh);

      localStorage.setItem("AdminData", JSON.stringify(action.payload));
    },
    [adminRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [adminRegister.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },
    logout: (state, acion) => {
      state.admin = {};
      state.isAdmin = false;
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("userData");
    },
  },
});
export const { setData } = AdminData.actions;
export default AdminData.reducer;
