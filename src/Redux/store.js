import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import coursesReducer from "./slices/coursesSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
  },
});
