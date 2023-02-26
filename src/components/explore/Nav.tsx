import { Link } from "react-router-dom";
import { FC, useEffect } from "react";
import { apiUrl } from "../../config";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { categorySelector, loadCategoryApi } from "../../store/slices/categorySlice";

const NavExplore: FC = () => {
    const dispatch = useAppDispatch();
    const categoryReducer = useSelector(categorySelector)

    useEffect(() => {
        if (categoryReducer.cate.length === 0) {
            dispatch(loadCategoryApi())
        }
    }, [])

    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return <div className="menu-aside">
        <aside className="menu-nav">
            <Link to="/explore/" className="menu-item" onClick={scrollToTop}>
                <img className="inline-block w-7 h-7" onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = 'none'
                }} src="/default/all-icon.svg" alt={'all-category'} />
                {" "}ทั้งหมด</Link>

            {categoryReducer.cate.map((c, idx) => {
                return <Link key={idx} to={`/explore/${c.cat_path}`} className="menu-item" onClick={scrollToTop}>
                    <img className="inline-block w-7 h-7" onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.style.display = 'none'
                    }} src={`${apiUrl}/public/cat/${c.cat_img}`} alt={c.cat_name} />
                    {" " + c.cat_name}
                </Link>
            })}
        </aside>
    </div>

}

export default NavExplore;