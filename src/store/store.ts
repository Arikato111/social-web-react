import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import PeopleReducer from "./slices/peopleSlice";
import exploreReducer from "./slices/exploreSlice";
import categoryReducer from "./slices/categorySlice";
import userLoginReducer from "./slices/userLoginSlice";

const reducer = {
  userLoginReducer,
  PeopleReducer,
  exploreReducer,
  categoryReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
