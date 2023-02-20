import { FC } from "react";
import axios from "axios";
import ProfileBar from "../components/ProfileBar";
import { useState, useEffect } from "react";
import NavContact from "../components/NavContact";
interface User {
    usr_address: string;
    usr_date: string;
    usr_email: string;
    usr_img: string;
    usr_name: string;
    usr_regis_date: string;
    usr_tel: string;
    usr_username: string;
    usr_view: number;
}

const PeoplePage: FC = () => {
    const [allUsers, setAllUsers] = useState<Array<User>>([])
    const [searchUsers, setSearchUsers] = useState("")
    useEffect(() => {
        (async function () {
            let users = await axios.get('/api/users')
            setAllUsers(users.data)
        })()
    }, [])

    let UsersSearch: Array<User> = []
    if (allUsers.length > 0) {
        UsersSearch = allUsers.filter((data) => data.usr_name.includes(searchUsers) || data.usr_username.includes(searchUsers))
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
                            console.log(idx)
                            return <ProfileBar key={idx} name={usr.usr_name} username={usr.usr_username} img={usr.usr_img} />
                        })
                        :
                        <div className="heading">ไม่พบผู้ใช้งาน</div>
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