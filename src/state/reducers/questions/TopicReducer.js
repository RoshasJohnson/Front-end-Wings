import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AXIOS from "../../../axios";

export const TopicFetch = createAsyncThunk(
  "All_TOPICS/GET",
  async (_, { getState }) => {
    const response =   await AXIOS.get("topics", {
          headers: {
            "Content-Type": "application/json",
          },
        });
    console.log("ALLTOPICS", response.data);
    return response.data.topics;
  }
);


const fetchTopics = createSlice({
  name: "topics",
  initialState: {
    Topics: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [TopicFetch.fulfilled]: (state, action) => {
      state.Topics = action.payload;
      state.loading = false;
      localStorage.setItem("topics",JSON.stringify(action.payload))
      state.error = "";
    },
    [TopicFetch.pending]: (state, action) => {
      state.loading = true;
    },
    [TopicFetch.rejected]: (state, action) => {
      state.loading = false;
      state.error = "Oops something happens try again";
    },
  },
});

export default fetchTopics.reducer;
