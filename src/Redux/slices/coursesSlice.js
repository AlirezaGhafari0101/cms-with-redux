import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((courses) => courses);
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default coursesSlice.reducer;
