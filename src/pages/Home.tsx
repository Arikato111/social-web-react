import { FC, useEffect } from "react";

const HomePage: FC = () => {
    useEffect(()=> {
        document.title = "หน้าหลัก | aden"
    }, [])
    return <main>
        <h1 className="text-4xl text-center">Homepage</h1>
    </main>
}

export default HomePage