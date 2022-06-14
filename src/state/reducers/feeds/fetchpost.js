import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {AxiosAuth} from "../../../AxiosIns/AxiosAuth";

export const feedFetch = createAsyncThunk(
  "FEED/GET",
  async () => {
      console.log("fetching feed");
    const response = await AxiosAuth.get("feeds/get_feeds", {
    });
    console.log("feed===============", response.data);
    return response.data;
  }
);

const fetchFeed = createSlice({
  name: "Feed",
  initialState: {
    Feed: [],
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
},
    extraReducers: {
      [feedFetch.fulfilled]: (state, action) => {
        console.log("fee--------d");
        state.Feed = action.payload;
        state.loading = false;
        state.error = ""
      },
      [feedFetch.pending]: (state, action) => {
        state.loading = true;
        console.log("fetching feed");
      },
      [feedFetch.rejected]: (state, action) => {
        state.loading = false;
        state.error = "Oops something happens try again";
      },
    },

});


export const { setSuccess } = fetchFeed.actions;
export default fetchFeed.reducer;
