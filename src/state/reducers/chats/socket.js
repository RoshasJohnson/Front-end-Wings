import { createSlice } from "@reduxjs/toolkit";

const Socket = createSlice({
  name: "Socket",
  initialState:{
    socket:""
  },
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
  
    },
  },
});


export default Socket.reducer
export const {setSocket} = Socket.actions