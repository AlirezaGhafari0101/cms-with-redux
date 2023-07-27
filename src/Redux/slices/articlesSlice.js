import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getArticlesFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((articles) => articles);
  }
);

export const removeArticle = createAsyncThunk(
  "articles/removeArticle",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
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
    builder.addCase(removeArticle.fulfilled, (state, action) => {
      const newArticles = [...state].filter(
        (article) => article._id !== action.payload.id
      );
      return newArticles;
    });
  },
});

export default articlesSlice.reducer;
