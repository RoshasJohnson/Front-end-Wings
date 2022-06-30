import { createSlice } from "@reduxjs/toolkit";

const chatUser = createSlice({
  name: "userListenTo",
  initialState:{
    userListenTo:''
  },
  reducers: {
    SetuserListenTo: (state, action) => {
      state.userListenTo = action.payload
    },
  },
});


export default chatUser.reducer
export const {SetuserListenTo} = chatUser.actions