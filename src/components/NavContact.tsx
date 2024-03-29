import { FC } from "react";
import { SPONSOR_URL } from '../config'

const NavContact: FC = () => {
    return <div className="py-5 px-3 text-zinc-800 sm:fixed sm:overflow-x-auto max-h-[90vh] pb-5">
        <div className="text-3xl bg-white p-3 text-center rounded-lg shadow-md">
            about <span className="font-normal text-blue-600">a<span className="font-bold">den</span></span>
        </div>

        <div className="px-5">
            <div className=" sm:block text-zinc-800">
                <a href="https://www.apple.com/app-store/" target="_blank" className="p-3 pw-full my-3 w-full bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 shadow-md rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="black" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    <div className="text-left">
                        <div className="mb-1 text-xs">Download on the</div>
                        <div className="mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                    </div>
                </a>
                <a href="https://play.google.com/" target="_blank" className="p-3 w-full mb-3 bg-white shadow-md focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="black" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                    <div className="text-left">
                        <div className="mb-1 text-xs">Get in on</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-5 text-gray-500">
            <div>
                © 2023 aden
            </div>
            ⦁ เกี่ยวกับ
            ⦁ ช่วยเหลือ
            ⦁ คำถามที่พบบ่อย
            ⦁ นโยบายการโฆษณา
            ⦁ นโยบายความเป็นส่วนตัว
            ⦁ แนวทางการใช้แบรนด์ aden
            ⦁ aden เพื่อธุรกิจ
            ⦁ ไทย
            {(SPONSOR_URL ?? false) ?
                <>
                    ⦁ <a className="hover:underline hover:text-blue-600" href={SPONSOR_URL}>สนับสนุน</a>
                </>
                : ""
            }
            ⦁ <a target="_blank" className="hover:underline hover:text-blue-600" href="https://github.com/Arikato111/social-web-react">open source</a>

        </div>
    </div>
}

export default NavContact;