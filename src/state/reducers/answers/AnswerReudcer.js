import { createAsyncThunk } from "@reduxjs/toolkit";

export const answerForEachQuesiton = createAsyncThunk(
  "ANSWERS OF EACH QUESTION",
  async (_, { getState }) => {
    const state = getState();
    // const token = state.userAuth.userData.access

    const response = await AXIOS.get("answers/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
);
