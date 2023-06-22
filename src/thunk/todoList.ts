import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../axiosInstance";
import { Todo } from "../models/todoList";

export const getTodoList = createAsyncThunk(
  "todolist/getTodoList",
  async () => {
    try {
      const response = await API.get("records");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todolist/addTodo",
  async (todo: Todo) => {
    try {
      const response = await API.post("records", todo);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todolist/updateTodo",
  async (todo: Todo) => {
    try {
      const response = await API.put(`records/${todo.id}`, todo);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todolist/deleteTodo",
  async (id: number) => {
    try {
      const response = await API.delete(`records/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
