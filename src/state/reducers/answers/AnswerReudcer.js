import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AXIOS from "../../../axios";



export const answerFetch = createAsyncThunk(
  "ANSWER  OF EACH QUESTION",
  async(id,{getState}) =>{
    
    const state = getState()
    const response = await AXIOS.get(`get_answer/${id}/`);
    return response.data;

  }
)



const answers = createSlice({
  name: "Answers",
  initialState: {
    setAnswer: [],
    loading:false,
    success:false,
    error :""
  },
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    }


  },
  extraReducers:{
    [answerFetch.fulfilled]:(state,action)=>{
      state.setAnswer = action.payload
      state.loading = false
      state.error  = ""
    },
    [answerFetch.pending]:(state,action)=>{
      state.loading = true;
    },
    [answerFetch.rejected]:(state,action)=>{
      state.loading = false
      state.error  = "can't get answer"
    }
  }
});

export const {setSuccess}  = answers.actions
export default answers.reducer