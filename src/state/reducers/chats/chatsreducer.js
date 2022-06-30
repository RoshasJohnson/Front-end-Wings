import { createSlice } from "@reduxjs/toolkit";

const Chat = createSlice({
  name: "Chat",
  initialState:{
    chats:[]
  },
  reducers: {
    setChat: (state, action) => {
      state.chats = action.payload;
  
    },
  },
});


export default Chat.reducer
export const {setChat} = Chat.actions