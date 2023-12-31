import Navbar from '../component/navbar'

import axios from "axios"
import { useState } from "react";
import { useRouter } from "next/router";

export default function dashboard() {

    const [user, setUser] = useState({
        email: '',
        username: ''
    })

    const router = useRouter()

    const getprofile = async () => {
        const response = await axios.get('/api/profile')
        setUser(response.data)
    }

    const logoutProfile = async () => {
        const response = await axios.post('/api/auth/logout')
        console.log(response);
        router.push('/login')
    }

    const deleteall = async () =>{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/data/delete`)
    }

    return (
        <>
            <Navbar />
            <div>
                <h1>Dashboard</h1>
                <p>{JSON.stringify(user, null, 2)}</p>
                <button onClick={() => getprofile()}>get profile</button>
                <button onClick={() => logoutProfile()}>LogOut</button>
                <button onClick={deleteall}>borrar datos</button>
            </div>
        </>
    )
};
