import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  loadCheckLogin,
  userLoginSelector,
} from "../store/slices/userLoginSlice";
import NotFoundPage from "./NotFound";
import { useAppDispatch } from "../store/store";

const LogoutPage: FC = () => {
  const userLoginReducer = useSelector(userLoginSelector);
  const dispatch = useAppDispatch();

  const [status, setStatus] = useState(false);
  const deleteTokenApi = async (token1: string, token2: string) => {
    const formData = new FormData();
    formData.append("token1", token1);
    formData.append("token2", token2);
    axios.post(`/api/token?method=delete`, formData).then((res) => {
      dispatch(loadCheckLogin());
    });
  };
  useEffect(() => {
    let token1 = Cookies.get("token1");
    let token2 = Cookies.get("token2");
    if (token1 && token2) {
      deleteTokenApi(token1, token2);
    } else {
      Cookies.remove("token1");
      Cookies.remove("token2");
    }
    setStatus(true);
  }, []);

  if (!userLoginReducer.isLogin) return <NotFoundPage />;
  else if (status) return <Navigate to={"/"} />;
  else
    return (
      <main className="frame">
        <div className="heading">กำลังออกจากระบบ</div>
      </main>
    );
};

export default LogoutPage;
