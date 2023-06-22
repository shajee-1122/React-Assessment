import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import slice from "./redux/todoListSlice";

export const store = configureStore({
  reducer: {
    todo: slice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
