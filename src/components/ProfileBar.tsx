import { FC } from "react";
import { apiUrl } from '../config'

interface ProfileBarProps {
    username: string, name: string, img: string;
}

const ProfileBar: FC<ProfileBarProps> = ({ username, name, img }) => {
    return <div className="form-control w-full text-zinc-800">
        <a href={`/${username}`} className="flex items-center px-3">
            <div>
                <img className="w-9 h-9 rounded-full inline-block object-cover" src={`${apiUrl}/public/profile/${img}`} onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/default/profile.png'
                }} alt="profile image" />
            </div>
            <div className="px-3">
                <div>{name}</div>
                <div className="text-gray-500 text-sm">@{username}</div>
            </div>
        </a>
    </div>
}

export default ProfileBar;