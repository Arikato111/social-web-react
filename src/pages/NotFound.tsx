import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
    useEffect(()=> {
        document.title = "not found page"
    }, [])
    return <main>
        <div className="text-center mt-5 mx-3">
            <img className="inline-block w-40" src="/icons/alert.svg" alt="alert icon" />
        </div>
        <div className="text-3xl text-center m-5 text-gray-600">หน้านี้ไม่พร้อมใช้งาน</div>
        <div className="text-center">
            <Link to={'/'} className="btn primary">
                กลับสู่เว็บไซต์
            </Link>
        </div>
    </main>

}

export default NotFoundPage;