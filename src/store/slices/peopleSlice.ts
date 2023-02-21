import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

export interface User {
  usr_address: string;
  usr_date: string;
  usr_email: string;
  usr_img: string;
  usr_name: string;
  usr_regis_date: string;
  usr_tel: string;
  usr_username: string;
  usr_view: number;
}

type PeopleState = {
  users: Array<User>;
  isLoading: boolean;
};

const initialValues: PeopleState = {
  users: [],
  isLoading: false,
};

export const fetchPeopleApi = createAsyncThunk("People/fetchApi", async () => {
  return await (
    await axios.get("/api/users")
  ).data;
});

const PeopleSlice = createSlice({
  name: "People",
  initialState: initialValues,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPeopleApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPeopleApi.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
  },
});

const PeopleReducer = PeopleSlice.reducer;
export default PeopleReducer;
export const peopleSelector = (store: RootState) => store.PeopleReducer;
