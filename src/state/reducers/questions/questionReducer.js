import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AXIOS from "../../../axios";

export const questionFetch = createAsyncThunk(
  "ALL_QUESTION/GET",
  async (_, { getState }) => {
    const state = getState();
    const token = state.userAuth.userData.jwt.access;
    console.log(token,"acces token");
    const response = token
      ? await AXIOS.get("questions/", {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        
      : await AXIOS.get("questions/", {
          headers: {
            "Content-Type": "application/json",
          },
        });
    console.log("allqueston", response.data);
    return response.data;
  }
);

const fetchAllQuestion = createSlice({
  name: "All Questions",
  initialState: {
    AllQuesitons: [],
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    }
  },
  extraReducers: {
    [questionFetch.fulfilled]: (state, action) => {
      state.AllQuesitons = action.payload;
      state.loading = false;
      state.error = "";
    },
    [questionFetch.pending]: (state, action) => {
      state.loading = true;
    },
    [questionFetch.rejected]: (state, action) => {
      state.loading = false;
      state.error = "Oops something happens try again";
    },
  },
});

export default fetchAllQuestion.reducer;
export const { setSuccess } = fetchAllQuestion.actions;

