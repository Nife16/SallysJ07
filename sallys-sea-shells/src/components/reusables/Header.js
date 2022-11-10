import '../../css/components/reusables/header.css'

const Header = () => {

    return (
        <div className="flex-row header-padding">
            <div className="third-width">
                <a href="/sign-up" className='firstAnchor center'>Sign Up</a>
                <a href="/" className='center'>Sign In</a>
            </div>
            <div className='third-width center'>
                <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8g02HfakxmO8yHRQLcFo5RqkLY09qs0EHg&usqp=CAU" />
            </div>
            <div className="third-width right">
                <a href="#" className='center'>Just for Looks</a>
                <div className='margin-vert'>
                    <div className='letter-button center'>
                        N
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header