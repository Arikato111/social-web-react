import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { exploreSelector, fetchExploreApi } from "../store/slices/exploreSlice";
import { useAppDispatch } from "../store/store";
import NavContact from "../components/NavContact";
import Post from "../components/Post";
import NavExplore from "../components/explore/Nav";
import { useParams } from "react-router-dom";
import { categorySelector } from "../store/slices/categorySlice";

interface ExploreCat {
    cat?: string | null;
}
const ExplorePage: FC<ExploreCat> = () => {
    const dispatch = useAppDispatch();
    const exploreReducer = useSelector(exploreSelector)
    const categoryReducer = useSelector(categorySelector)

    let { cat } = useParams();
    useEffect(() => {
        if (cat ?? false) {
            let findCate = categoryReducer.cate.filter(data => data.cat_path === cat)
            if (findCate.length > 0) {
                document.title = `สำรวจ | ${findCate[0].cat_name} | aden`
            } else {
                document.title = `สำรวจ | ${cat} | aden`
            }
        } else {
            document.title = "สำรวจ | aden"
        }
        dispatch(fetchExploreApi(cat ?? ""))
    }, [cat])

    return <main className="py-3">
        <div className="row">
            <div className="col-span-3">
                <NavExplore />
            </div>
            <div className="col-span-6 mt-5">
                {exploreReducer.explore.length > 0 ?
                    exploreReducer.explore.map((post, idx) => {
                        return <Post key={idx} {...post} />
                    })
                    : ""}
            </div>
            <div className="col-span-3">
                <NavContact />
            </div>
        </div>
    </main>

}

export default ExplorePage;