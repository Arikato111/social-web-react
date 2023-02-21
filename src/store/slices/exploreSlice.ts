import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

export type ExplorePost = {
  post_id: number;
  post_detail: string;
  post_date: string;
  post_usr_id: number;
  post_cat_id: number;
  post_img: string;
  post_view: number;
};

type ExploreState = {
  explore: Array<ExplorePost>;
  isLoading: boolean;
};

const initialValues: ExploreState = {
  explore: [],
  isLoading: false,
};

export const fetchExploreApi = createAsyncThunk(
  "Explore/fetchApi",
  async () => {
    let res = await axios.get("/api/explore");
    return res.data;
  }
);

const exploreSlice = createSlice({
  name: "Explore",
  initialState: initialValues,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchExploreApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExploreApi.fulfilled, (state, action) => {
      state.explore = action.payload;
    });
  },
});

const exploreReducer = exploreSlice.reducer;
export default exploreReducer;
export const exploreSelector = (store: RootState) => store.exploreReducer;
