import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  deleteTodo,
  getTodoList,
  updateTodo,
} from "../thunk/todoList";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    list: {
      isLoading: false,
      status: "",
      values: [],
    },
    save: {
      isSaving: false,
      isDeleting: false,
    },
  },
  reducers: {},
  extraReducers: {
    [getTodoList.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.isLoading = true;
    },
    [getTodoList.fulfilled.type]: (state, { payload }) => {
      state.list.status = "success";
      state.list.values = payload;
      state.list.isLoading = false;
    },
    [getTodoList.rejected.type]: (state, action) => {
      state.list.status = "failed";
      state.list.isLoading = false;
    },
    [addTodo.pending.type]: (state, action) => {
      state.save.isSaving = true;
    },
    [addTodo.fulfilled.type]: (state, action) => {
      state.save.isSaving = false;
    },
    [addTodo.rejected.type]: (state, action) => {
      state.save.isSaving = false;
    },
    [updateTodo.pending.type]: (state, action) => {
      state.save.isSaving = true;
    },
    [updateTodo.fulfilled.type]: (state, action) => {
      state.save.isSaving = false;
    },
    [updateTodo.rejected.type]: (state, action) => {
      state.save.isSaving = false;
    },
    [deleteTodo.pending.type]: (state, action) => {
      state.save.isDeleting = true;
    },
    [deleteTodo.fulfilled.type]: (state, action) => {
      state.save.isDeleting = false;
    },
    [deleteTodo.rejected.type]: (state, action) => {
      state.save.isDeleting = false;
    },
  },
});

export default TodoSlice.reducer;
