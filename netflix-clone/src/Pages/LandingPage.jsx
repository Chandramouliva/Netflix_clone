import React from 'react'
import styles from "./LandingPage.module.css"
import {useHistory} from "react-router-dom"
import SignUpPage from "./SignUpPage"
function LandingPage() {
    const history = useHistory()
    const [signIn, setSignIn] = React.useState(false)
    const handleLogin = () => {
        history.push("/home")
    }
    return (
        <div className = {styles.loginPage}>
            <div className = {styles.loginPage__background}>
                <img 
                className = {styles.loginPage__logo}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
                alt="netflix_logo" 
                />
                
                <button onClick = {() => setSignIn(true)} className = {styles.loginPage___button}>
                    SIgn In
                </button>

                <div className = {styles.loginPage__gradient}>

                </div>
            </div>
            <div className = {styles.loginPage__body}>
                {signIn ? <SignUpPage /> : (
                <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className = {styles.loginPage__input} >
                        <form>
                            <input type="email"
                            placeholder="Email Address"
                            />
                            <button onClick = {handleLogin} className={styles.loginPage__getStarted}>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LandingPage