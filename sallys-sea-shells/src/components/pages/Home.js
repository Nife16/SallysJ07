import Header from "../reusables/Header"
import { useEffect, useState } from "react"
import axios from "axios"


const Home = (props) => {

    return (
        <div className="">
            
            Hi {props.user.email}
        </div>
    )
}

export default Home