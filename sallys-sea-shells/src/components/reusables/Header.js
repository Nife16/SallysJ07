import { useNavigate } from 'react-router'
import '../../css/components/reusables/header.css'

const Header = (props) => {

    const navigator = useNavigate()

    const clickHandler = () => {
        localStorage.removeItem('email')
        navigator('/')
    }

    const renderSignInOutButtons = () => {
        if (props.user.email === undefined) {
            return (
                <div className="third-width">
                    <a href="/sign-up" className='firstAnchor center'>Sign Up</a>
                    <a href="/sign-in" className='center'>Sign In</a>
                </div>
            )
        } else {
            return (
                <div className="third-width">
                    <button className='center' onClick={clickHandler}>Sign Out</button>
                </div>
            )
        }
    }

    return (
        <div className="flex-row header-padding">
            {renderSignInOutButtons()}
            <div className='third-width center'>
                <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8g02HfakxmO8yHRQLcFo5RqkLY09qs0EHg&usqp=CAU" />
            </div>
            <div className="third-width right">
                <a href="#" className='center'>Just for Looks</a>
                <div className='margin-vert'>
                    <div className='letter-button center'>
                        {props.user.email?.charAt(0)}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header