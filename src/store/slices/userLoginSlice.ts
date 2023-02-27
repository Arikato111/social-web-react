import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";
import { RootState } from "../store";

export type User = {
  usr_id?: number;
  usr_name?: string;
  usr_bio?: string;
  usr_address?: string;
  usr_date?: string;
  usr_email?: string;
  usr_tel?: string;
  usr_username?: string;
  usr_regis_date?: string;
  usr_img?: string;
};

type UserLoginState = {
  usr: User;
  isLogin: boolean;
};

const initialValues: UserLoginState = {
  usr: {},
  isLogin: false,
};

export const loadCheckLogin = createAsyncThunk(
  "userLogin/loadCheckLogin",
  async () => {
    let token1 = Cookies.get("token1");
    let token2 = Cookies.get("token2");
    if (token1 && token2) {
      console.log("send api");
      let res = await axios.get("/api/token", {
        headers: {
          token1,
          token2,
        },
      });
      if (res.data.status === 1) {
        return res.data.usr;
      }
    }
    return false;
  }
);

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: initialValues,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadCheckLogin.fulfilled, (state, action) => {
      if (action.payload) {
        console.log(action.payload);
        state.usr = action.payload;
        state.isLogin = true;
      } else {
        state.isLogin = false;
        console.warn("login faild");
        state.usr = {};
        Cookies.remove("token1");
        Cookies.remove("token2");
      }
    });
  },
});

const userLoginReducer = userLoginSlice.reducer;
export default userLoginReducer;
export const userLoginSelector = (build: RootState) => build.userLoginReducer;
