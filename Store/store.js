import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../src/reducers/project.reducer";

export const store = configureStore({
  reducer: {
    projects : projectReducer
  },
});
