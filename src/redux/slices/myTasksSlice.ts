import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskType } from "../../types";

const localStorageData = localStorage.getItem("myTasks");
const parsedData = localStorageData ? JSON.parse(localStorageData) : [];

const initialState: taskType[] = parsedData;

const setLocalStorage = (state: taskType[]) => {
  localStorage.setItem("myTasks", JSON.stringify(state));
};

const myTasksSlice = createSlice({
  name: "myTasks",
  initialState,
  reducers: {
    addMyTask: (state, action: PayloadAction<taskType>) => {
      state.push(action.payload);
      setLocalStorage(state);
    },
    editMyTask: (state, action: PayloadAction<taskType>) => {
      const editIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state[editIndex] = action.payload;
      setLocalStorage(state);
    },
    deleteMyTask: (state, action: PayloadAction<taskType>) => {
      const deleteIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state.splice(deleteIndex, 1);
      setLocalStorage(state);
    },
  },
});

export const { addMyTask, editMyTask, deleteMyTask } = myTasksSlice.actions;
export default myTasksSlice;
