import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import coursesReducer from "./slices/coursesSlice";
import articlesReducer from "./slices/articlesSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    articles: articlesReducer,
  },
});
