import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getArticlesFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((articles) => articles);
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getArticlesFromServer.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default articlesSlice.reducer;
