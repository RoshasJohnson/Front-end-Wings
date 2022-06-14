import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import AXIOS from "../../../axios";

export const userVerify = createAsyncThunk(
  "LOGIN/Authentication",
  async (data) => {
    console.log("datassss", data);
    const response = await AXIOS.post("login", data);
    return response.data;
  }
);

export const userRegister = createAsyncThunk(
  "REGISTER/Authentication",
  async (data) => {
    console.log("responseData", data);
    const response = await AXIOS.post("create_user/", data);

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

const userLogin = createSlice({
  name: "LOGIN",
  initialState: {
    userData: localData,
    loading: false,
    loginStatus: loginStatusStorage,
    error: "",
  },
  reducers: {
    setData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: {
    [userVerify.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
      state.loginStatus = true;
      localStorage.setItem("access", action.payload.jwt.access);
      // localStorage.setItem("refresh", action.payload.jwt.refresh);
      localStorage.setItem("userData", JSON.stringify(action.payload));
      localStorage.setItem("loginStatus",true); // set login status to true
    },
    [userVerify.pending]: (state, action) => {
      state.loading = true;
    },
    [userVerify.rejected]: (state, action) => {
      state.loading = false;
      state.error = "Invalid user name or password";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
      state.loginStatus = true;
      localStorage.setItem("access", action.payload.jwt.access);
      localStorage.setItem("refresh", action.payload.jwt.refresh);

      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    [userRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [userRegister.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },
    logout: (state, acion) => {
      state.userData = {};
      state.loginStatus = false;
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("userData");
      localStorage.setItem("loginStatus",false); // set login status to false
    },
  },
});
export const { setData } = userLogin.actions;
export default userLogin.reducer;
