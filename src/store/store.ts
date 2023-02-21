import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import PeopleReducer from "./slices/peopleSlice";

const reducer = { PeopleReducer };

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
