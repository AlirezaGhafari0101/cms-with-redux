import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((courses) => courses);
  }
);

export const removeCourse = createAsyncThunk(
  "courses/removeCourse",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/courses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCoursesFromServer.fulfilled,
      (state, action) => action.payload
    );
    builder.addCase(removeCourse.fulfilled, (state, action) => {
      const newCourses = [...state].filter(
        (course) => course._id !== action.payload.id
      );
      return newCourses;
    });
  },
});

export default coursesSlice.reducer;
