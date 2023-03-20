import { FC } from "react";
import ProfileBar from "../components/ProfileBar";
import { useState, useEffect } from "react";
import NavContact from "../components/NavContact";
import { useSelector } from "react-redux";
import { fetchPeopleApi, peopleSelector } from "../store/slices/peopleSlice";
import { useAppDispatch } from "../store/store";
import { User } from "../store/slices/peopleSlice";

const PeoplePage: FC = () => {
    const [searchUsers, setSearchUsers] = useState("")

    const peopleReducer = useSelector(peopleSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.title = "ผู้คน | aden";
        dispatch(fetchPeopleApi());
    }, [])


    let UsersSearch: Array<User> = []
    if (peopleReducer.users.length > 0) {
        UsersSearch = peopleReducer.users.filter((data) => data.usr_name.toLowerCase().includes(searchUsers.toLowerCase()) || data.usr_username.toLowerCase().includes(searchUsers.toLowerCase()))
    }

    return <main>
        <div className="row">
            <div className="col-span-3">
                <div className="form-control-group sm:sticky sm:top-16">
                    <input value={searchUsers} onChange={(e) => setSearchUsers(e.target.value)} type="text" name="search" className="input-text m-0" placeholder="ค้นหาผู้ใช้งาน" />
                    <button className="btn primary">ค้นหา</button>
                </div>

            </div>
            <div className="col-span-6 text-zinc-800">
                <div className="mx-3">
                    {UsersSearch.length > 0 ?
                        UsersSearch.map((usr, idx) => {
                            return <ProfileBar key={idx} name={usr.usr_name} username={usr.usr_username} img={usr.usr_img} />
                        })
                        : (peopleReducer.isLoading ? <div className="heading">กำลังโหลด</div>
                            :
                            <div className="heading">ไม่พบผู้ใช้งาน</div>
                        )
                    }
                </div>
            </div>
            <div className="col-span-3">
                <NavContact />
            </div>
        </div>
    </main >
}

export default PeoplePage;