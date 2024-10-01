import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskType } from "../../types";

const initialState: taskType[] = [];

const myTasksSlice = createSlice({
  name: "myTasks",
  initialState,
  reducers: {
    setMyTasks: (state, action: PayloadAction<taskType[]>) => {
      state = action.payload;
    },
  },
});

export const { setMyTasks } = myTasksSlice.actions;
export default myTasksSlice;
