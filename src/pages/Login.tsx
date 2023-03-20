import axios from "axios";
import Cookies from "js-cookie";
import { FC, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loadCheckLogin, userLoginSelector } from "../store/slices/userLoginSlice";
import { useAppDispatch } from "../store/store";

const LoginPage: FC = () => {
    // check login status
    const userLoginReducer = useSelector(userLoginSelector)


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [userAlert, setUserAlert] = useState(false)
    const [passAlert, setPassAlert] = useState(false)

    let userReg = /[^a-z0-9]/

    useEffect(() => {
        document.title = "เข้าสู่ระบบ | aden"
    })
    const dispatch = useAppDispatch();

    const SubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        let res = await axios.post('/api/login', formData)
        if (res.data.status === 1) {
            Cookies.set('token1', res.data.token1)
            Cookies.set('token2', res.data.token2)
            dispatch(loadCheckLogin())
        } else {
            console.warn('login faild')
        }
    }

    if (userLoginReducer.isLogin) {
        return <Navigate to={'/home'} />
    }
    return <main className="frame">
        <h3 className="heading">เข้าสู่ระบบ</h3>
        <form onSubmit={SubmitForm} className="form-control" method="post">
            <input style={{ border: userAlert ? "red 1px solid" : "" }} name="username" className="input-text" placeholder="ชื่อผู้ใช้" maxLength={50} size={50} type="text" required
                value={username} onChange={(e) => {
                    if (userReg.test(e.target.value)) setUserAlert(true);
                    else {
                        setUserAlert(false)
                        setUsername(e.target.value)
                    }
                }} />
            <input style={{ border: passAlert ? "red 1px solid" : "" }} name="password" className="input-text" type="password" placeholder="รหัสผ่าน" required
                value={password} onChange={(e) => {
                    if (e.target.value.length < 1) {
                        setPassAlert(true)
                    } else {
                        setPassAlert(false)
                    }
                    setPassword(e.target.value)
                }} />
            <div className="text-right">
                <button name="login" className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md ">เข้าสู่ระบบ</button>
            </div>
            <div className="text-center">
                ยังไม่มีบัญชี? <Link className="text-blue-700 hover:underline" to="/register">สมัครสมาชิก</Link>
            </div>
        </form>
    </main>

}

export default LoginPage;