import { FC } from "react"
import { Link } from "react-router-dom";

const Navbar: FC = () => {
    return <nav className="bg-white border-gray-200 px-2 py-2 sm:py-0 sm:px-4 rounded dark:bg-gray-900 sticky top-0 z-50 shadow">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to={"/"} className="flex items-center">
                <span className="text-blue-500 font-normal text-2xl">a<span className="font-bold">den</span></span>
            </Link>
            {/*?php if (!isset($_SESSION['usr'])) : ?*/}
            <div className="flex items-center md:order-2">
                <Link to="/login" className="hover:underline hover:text-blue-700">เข้าสู่ระบบ</Link>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {/*?php else :
      require('./components/MenuProfile.php');
  endif; ?*/}
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {/*?php if (isset($_SESSION['usr'])) : ?*/}
                    {/* hide home */}
                    {false &&
                        <li>
                            <Link to="/home" data-title="หน้าหลัก" className="<?php checkPath('/home'); ?> nav-item">
                                <img className="w-7 sm:w-10 inline-block" src="/icons/home.svg" alt="home" />
                                <span className="sm:hidden">หน้าหลัก</span>
                            </Link>
                        </li>
                    }
                    {/*?php endif; ?*/}
                    <li>
                        <Link to="/explore/" data-title="สำรวจ" className="<?php checkPath('/explore/'); ?> nav-item">
                            <img className="w-7 sm:w-10 inline-block" src="/icons/explore.svg" alt="explore" />
                            <span className="sm:hidden">สำรวจ</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/board/" data-title="กระทู้" className="<?php checkPath('/board/'); ?> nav-item">
                            <img className="w-7 sm:w-10 inline-block" src="/icons/question.svg" alt="home" />
                            <span className="sm:hidden">กระทู้</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/people" data-title="ผู้คน" className="<?php checkPath('/people'); ?> block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-zinc-300 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <img className="w-7 sm:w-10 inline-block" src="/icons/group.svg" alt="home" />
                            <span className="sm:hidden">ผู้คน</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/poll/" data-title="แบบประเมิน" className="<?php checkPath('/poll/'); ?> nav-item">
                            <img className="w-7 sm:w-10 inline-block" src="/icons/poll.svg" alt="home" />
                            <span className="sm:hidden">แบบประเมิน</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

}

export default Navbar;