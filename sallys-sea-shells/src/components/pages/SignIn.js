import Header from "../reusables/Header"
import '../../css/components/pages/sign-up.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'
import LoadingSpinner from "../reusables/LoadingSpinner"


const SignIn = (props) => {

    const navigator = useNavigate()
    useEffect(() => {
        if (props.user.id !== undefined) {
            navigator('/')
        }
        props.setIsLoading(false)

    })
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempUser = { ...user }
        tempUser[name] = value
        setUser(tempUser)
    }

    const submitHandler = () => {

        props.setIsLoading(true)
        axios.post('http://localhost:8080/signIn', user)
            .then((response) => {
                localStorage.setItem("email", response.data.email)
                props.setUser(response.data)
                props.setIsLoading(false)
                navigator('/')
            }).catch((e) => {
                props.setIsLoading(false)
                console.log(e)
            })

    }

    const renderSpinnerOrContent = () => {

        if (props.isLoading) {
            return (
                <LoadingSpinner />
            )
        } else {
            return (
                <div className="">
                    <div className="center flex-col">
                        <h1>
                            Sign In YA FOO
                        </h1>
                        <div className="sign-up-form flex-col">
                            <label>Username</label>
                            <input placeholder="TYPE HERE" type='text' name="email" value={user.email} onChange={changeHandler} />
                            <label>Password</label>
                            <input type='password' name="password" value={user.password} onChange={changeHandler} />
                            <button onClick={submitHandler}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        renderSpinnerOrContent()
    )

}

export default SignIn