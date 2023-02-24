import axios from "axios";
import { Link } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { apiUrl } from "../../config";

interface CategoryNav {
    cat_id: number;
    cat_name: string;
    cat_path: string;
    cat_img: string;
}

const NavExplore: FC = () => {
    const [cat, setCat] = useState<Array<CategoryNav>>([]);

    const fetchCatApi = async () => {
        let res = await axios.get('/api/category');
        setCat(res.data)
    }

    useEffect(() => {
        fetchCatApi();
    }, [])
    return <div className="menu-aside">
        <aside className="menu-nav">
            <Link to="/explore/" className="menu-item">
                <img className="inline-block w-7 h-7" onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = 'none'
                }} src="/public/default/all-icon.svg" alt={'all-category'} />
                {" "}ทั้งหมด</Link>

            {cat.map((c) => {
                return <Link to={`/explore/${c.cat_path}`} className="menu-item">
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