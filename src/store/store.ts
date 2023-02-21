import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import PeopleReducer from "./slices/peopleSlice";
import exploreReducer from "./slices/exploreSlice";

const reducer = { PeopleReducer, exploreReducer };

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
