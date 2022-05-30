import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AXIOS from "../../../axios";

export const userVerify = createAsyncThunk(
  "LOGIN/Authentication",
  async (data) => {
    console.log("datassss", data);
    const response = await AXIOS.post("login", data);
    console.log(response.data);
    return response.data;
  }
);


export const userRegister = createAsyncThunk(
    "REGISTER/Authentication",
    async (data) => {
      console.log("responseData", data);
      const response = await AXIOS.post("create_user/", data);
      console.log(response.data);
      return response.data;
    }
  );


const localData = localStorage.getItem("access")
  ? {
      access: JSON.parse(localStorage.getItem("access")),
      refresh: JSON.parse(localStorage.getItem("refresh")),
    }
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
  extraReducers: {
    [userVerify.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
      state.loginStatus = true;
      localStorage.setItem("access", JSON.stringify(action.payload.jwt.access));
      localStorage.setItem("refresh", JSON.stringify(action.payload.jwt.refresh));
      localStorage.setItem("loginStatus", true);
    },
    [userVerify.pending]: (state, action) => {
      state.loading = true;
    },
    [userVerify.rejected]: (state, action) => {
      state.loading = false;
      state.error = "Invalid credential";
    },
    [userRegister.fulfilled]:(state,action)=>{
      state.userData = action.payload;
      state.loading = false;
      state.loginStatus = true;
      localStorage.setItem("access", JSON.stringify(action.payload.jwt.access));
      console.log(action.payload.access);
      localStorage.setItem("refresh", JSON.stringify(action.payload.jwt.refresh));
      localStorage.setItem("loginStatus", true);
    }
    ,
    [userRegister.pending]:(state,action)=>{
      state.loading = true;
    
    }
    ,
    [userRegister.rejected]:(state,action)=>{
      state.loading=false;
      state.error = "Invalid email or password try again "
    }
    ,
    logout: (state, acion) => {
      state.userData = {};
      state.loginStatus = false;
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("loginStatus");
    },
   
  },
}); 





export default userLogin.reducer;

