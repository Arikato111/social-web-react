import { FC, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";

const RegisterPage: FC = () => {
    useEffect(() => {
        document.title = "สมัครสมาชิก | aden"
    }, [])

    const SubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("ระบบสมัครสมาชิกยังไม่พร้อม");

    }
    return <main className="frame">
        <h3 className="heading">สมัครสมาชิก</h3>
        <form onSubmit={SubmitForm} className="form-control" encType="multipart/form-data" method="post">
            <input className="input-text" type="text" pattern="[ก-์a-zA-Z\s]{1,50}" name="usr_name" maxLength={50} defaultValue="" placeholder="ชื่อ - สกุล" required />
            <textarea className="input-text" name="usr_bio" maxLength={200} placeholder="คำอธิบายตัวคุณ" required />
            <textarea className="input-text" name="usr_address" maxLength={200} placeholder="ที่อยู่" required defaultValue={""} />
            <div className="flex">
                <label className="input-label" htmlFor="birth of date">วันเกิด</label>
                <input className="input-text" type="date" name="usr_date" defaultValue="" id="" required />
            </div>
            <input className="input-text" type="email" maxLength={100} name="usr_email" defaultValue="" placeholder="อีเมล" required />
            <input className="input-text" type="tel" maxLength={10} name="usr_tel" defaultValue="" placeholder="เบอร์โทร" required />
            <div className="text-red-600 ml-5">*username ต้องเป็นตัวอักษรภาษาอังกฤษตัวพิมพ์เล็กและตัวเลขเท่านั้น</div>
            <input className="input-text" type="text" maxLength={50} name="usr_username" defaultValue="" placeholder="username" required />
            <input className="input-text" type="password" maxLength={50} name="usr_password" placeholder="รหัสผ่าน" required />
            <input className="input-text" type="password" maxLength={50} name="usr_password1" placeholder="ยืนยันรหัสผ่าน" required />
            <div className="flex">
                <label className="input-label" htmlFor="">รูปโปรไฟล์</label>
                <input className="input-text" type="file" accept="image/jpeg, image/png" name="usr_img" required />
            </div>
            <div>
                <button name="regis" className="bg-blue-600 text-white py-2 px-3 rounded-lg w-full">สมัคร</button>
            </div>
            <div className="text-center mt-3">มีบัญชีแล้ว <Link className="hover:underline text-blue-700" to="/login">เข้าสู่ระบบ</Link></div>
        </form>
        <br />
    </main>

}
export default RegisterPage;