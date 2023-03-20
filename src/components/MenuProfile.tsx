import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiUrl } from "../config";
import { userLoginSelector } from "../store/slices/userLoginSlice";

const MenuProflie: FC = () => {
    const userLoginReducer = useSelector(userLoginSelector)
    return <div data-title="เมนู" className="flex items-center md:order-2">
        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-10 h-10 shadow shadow-zinc-500 rounded-full object-cover" src={`${apiUrl}/public/profile/${userLoginReducer.usr.usr_img ?? ""}`}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/default/profile.png' }} alt="user photo" />
        </button>
        {/* Dropdown menu */}
        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{userLoginReducer.usr.usr_name}</span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{userLoginReducer.usr.usr_email}</span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                    <Link to="/create-post" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-blue-600">+ สร้างโพสต์</Link>
                </li>
                <li>
                    <Link to={`/${userLoginReducer.usr.usr_username}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">โปรไฟล์</Link>
                </li>
                <li>
                    <Link onClick={() => confirm('ยืนยันการออกจากระบบ')} to="/logout" className="block px-4 py-2 text-sm text-rose-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ออกจากระบบ</Link>
                </li>
            </ul>
        </div>
        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
        </button>
    </div >

}

export default MenuProflie;