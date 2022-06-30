import { createSlice } from "@reduxjs/toolkit";

const chatShow  = createSlice({
    name:"Chatshow",
    initialState:{
        chats:[]
      },
      reducers:{
        setChatShow:(state,action)=>{
            state.chats = action.payload
        }
      }
})
 
export default chatShow.reducer
export const {setChatShow} = chatShow.actions