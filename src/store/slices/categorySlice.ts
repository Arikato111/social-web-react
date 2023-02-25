import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export type CategoryType = {
  cat_id: number;
  cat_name: string;
  cat_path: string;
  cat_img: string;
};

type CatogoryState = {
  cate: Array<CategoryType>;
};

const initialValues: CatogoryState = { cate: [] };

export const loadCategoryApi = createAsyncThunk(
  "category/loadCategoryApi",
  async () => {
    let res = await axios.get("/api/category");
    return res.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: initialValues,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadCategoryApi.fulfilled, (state, action) => {
      state.cate = action.payload;
    });
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
export const categorySelector = (build: RootState) => build.categoryReducer;
