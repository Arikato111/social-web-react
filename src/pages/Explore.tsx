import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { exploreSelector, fetchExploreApi } from "../store/slices/exploreSlice";
import { useAppDispatch } from "../store/store";
import NavContact from "../components/NavContact";
import Post from "../components/Post";

const ExplorePage: FC = () => {
    const dispatch = useAppDispatch();
    const exploreReducer = useSelector(exploreSelector)
    useEffect(() => {
        dispatch(fetchExploreApi())
    }, [])
    return <main className="py-3">
        <div className="row">
            <div className="col-span-3">
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