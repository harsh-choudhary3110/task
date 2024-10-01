import { configureStore } from "@reduxjs/toolkit";
import myTasksSlice from "./slices/myTasksSlice";

const store = configureStore({
  reducer: {
    [myTasksSlice.name]: myTasksSlice.reducer,
  },
});

export default store;
