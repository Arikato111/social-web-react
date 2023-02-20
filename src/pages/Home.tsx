import { FC, useEffect } from "react";
import axios from "axios";

const HomePage: FC = () => {
    useEffect(()=> {
        document.title = "หน้าหลัก | aden"
        axios.get('/api/users').then( res => console.log(res.data))
    }, [])
    return <main>
        <h1 className="text-4xl text-center">Homepage</h1>
    </main>
}

export default HomePage