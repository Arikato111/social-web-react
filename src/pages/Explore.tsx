import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { exploreSelector, fetchExploreApi } from "../store/slices/exploreSlice";
import { useAppDispatch } from "../store/store";
import NavContact from "../components/NavContact";
import Post from "../components/Post";
import NavExplore from "../components/explore/Nav";
import { useParams } from "react-router-dom";

interface ExploreCat {
    cat?: string | null;
}
const ExplorePage: FC<ExploreCat> = () => {
    const dispatch = useAppDispatch();
    const exploreReducer = useSelector(exploreSelector)

    let { cat } = useParams();
    useEffect(() => {
        if (cat ?? false) {
            document.title = `สำรวจ | ${cat} | aden`
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
                    exploreReducer.explore.map((post) => {
                        return <Post {...post} />
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