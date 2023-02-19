import { FC, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";

const LoginPage: FC = () => {
    useEffect(() => {
        document.title = "เข้าสู่ระบบ | aden"
    })

    const SubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("ระบบสมัครสมาชิกยังไม่พร้อม");
    }
    return <main className="frame">
        <h3 className="heading">เข้าสู่ระบบ</h3>
        <form onSubmit={SubmitForm} className="form-control" method="post">
            <input name="usr_username" className="input-text" placeholder="ชื่อผู้ใช้" maxLength={50} size={50} type="text" required />
            <input name="usr_password" className="input-text" type="password" placeholder="รหัสผ่าน" required />
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