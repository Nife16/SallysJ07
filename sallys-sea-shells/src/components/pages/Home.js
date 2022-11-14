import Header from "../reusables/Header"
import { useEffect, useState } from "react"
import axios from "axios"


const Home = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        if(localStorage.getItem("email")) {
            axios.get(`http://localhost:8080/getUserByEmail/${localStorage.getItem("email")}`)
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }, [])

    return (
        <div className="flex-col container">
            <Header user={user}/>
            Hi {user.email}
        </div>
    )
}

export default Home