import { FC, useEffect } from "react";
import { ExplorePost } from "../store/slices/exploreSlice";
import { apiUrl } from '../config'
import { useSelector } from "react-redux";
import { peopleSelector } from "../store/slices/peopleSlice";
import { Link } from "react-router-dom";

const Post: FC<ExplorePost> = ({ post_cat_id, post_date, post_detail, post_id, post_img, post_usr_id, post_view }) => {
    const peopleReducer = useSelector(peopleSelector);
    // future find user info with id | but api is not support yet.
    // const user = peopleReducer.users.filter((people)=> people.)

    useEffect(() => {
        document.title = "สำรวจ | aden"
    }, [])
    return <div className="mb-3 mx-3 bg-white rounded-lg shadow py-3 text-zinc-800">
        <div className="text-end px-3">
            <button id="dropdownPost" data-dropdown-toggle="dropdownpost" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span className="sr-only">Open dropdown</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
            </button>
        </div>
        <div id="dropdownpost" className="z-30 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700" data-popper-placement="top" data-popper-reference-hidden data-popper-escaped style={{ position: 'absolute', inset: 'auto auto 0px 0px', margin: 0, transform: 'translate3d(607px, 7550.5px, 0px)' }}>
            <form method="post">
                <input type="hidden" name="post_id" defaultValue={24} />
                <ul className="py-1" aria-labelledby="dropdownPost">
                    <li>
                        <button name="deletePost" className="text-rose-600 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ลบ</button>
                    </li>
                </ul>
            </form>
        </div>

        <div className="flex items-center px-3">
            <div>
                <img className="w-9 h-9 rounded-full object-cover inline-block" src={`${apiUrl}/public/profile/${post_usr_id}`} onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/default/post.png'
                }} alt="profile image" />
            </div>
            <div className="px-3">
                <Link className="hover:underline" to="/#:username">#:username</Link>
                <div className="text-gray-500 text-sm">โพสต์เมื่อ {post_date} ⦁ ความรู้</div>
            </div>
        </div>
        <pre className="whitespace-pre-wrap break-words my-3 px-3 max-h-[500px] overflow-y-auto">{post_detail}</pre>
        <div>
            <img className="w-full" src={`${apiUrl}/public/posts/${post_img}`} onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `/default/post.png`
            }} alt="image post" />
        </div>
        <div className="m-3">
            <span><img className="inline-block w-6" src="/icons/f-heart.svg" alt="full heart icon" />
                <span id="likecount24">2</span>
            </span>
            <span className="float-right">
                1 ความคิดเห็น
                <span className="mx-3">
                    608 รับชม
                </span>
            </span>
        </div>
        <hr className="border" />
        <div className="p-3 pb-0 text-gray-600">
            <div>
                <input type="hidden" name="post_id" defaultValue={24} />
                <button onClick={() => { }} className="py-1 px-3 hover:bg-gray-200 rounded-lg">
                    <img className="inline-block w-6" src="/icons/heart.svg" alt="heart icon" />
                    ถูกใจ</button>
                <button onClick={() => { }} className="hidden py-1 px-3 hover:bg-gray-200 rounded-lg text-rose-500"><img className="inline-block w-6" src="/icons/heart-red.svg" alt="heart icon" />
                    ถูกใจแล้ว
                </button>
                <Link to="/post/24" className="py-2 px-3 hover:bg-gray-200 rounded-lg">
                    <img className="inline-block w-6" src="/icons/comment.svg" alt="comment icon" />
                    ความคิดเห็น
                </Link>
            </div>
        </div>
    </div>

}
export default Post;