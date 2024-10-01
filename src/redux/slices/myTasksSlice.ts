import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskType } from "../../types";

const initialState: taskType[] = [
  {
    id: 0,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ad, fuga, corporis omnis accusantium aperiam fugit impedit esse rem fugiat tempore dolor, ullam est sapiente. Eos illo fuga temporibus officia!",
    completed: false,
  },
];

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
