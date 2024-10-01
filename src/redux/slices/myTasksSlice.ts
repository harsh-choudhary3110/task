import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskType } from "../../types";

const initialState: taskType[] = [];

const myTasksSlice = createSlice({
  name: "myTasks",
  initialState,
  reducers: {
    addMyTask: (state, action: PayloadAction<taskType>) => {
      state.push(action.payload);
    },
    editMyTask: (state, action: PayloadAction<taskType>) => {
      const editIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state[editIndex] = action.payload;
    },
    deleteMyTask: (state, action: PayloadAction<taskType>) => {
      const deleteIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state.splice(deleteIndex, 1);
    },
  },
});

export const { addMyTask, editMyTask, deleteMyTask } = myTasksSlice.actions;
export default myTasksSlice;
