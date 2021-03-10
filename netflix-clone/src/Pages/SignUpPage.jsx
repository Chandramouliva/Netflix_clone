import React from 'react'
import {useHistory} from "react-router-dom"
import styles from "./SignUpPage.module.css"
function SignUpPage() {
    const history = useHistory()
    const handleLogin = (e) => {
        e.preventDefault()
        history.push("/home")
    }
    return (
        <div className = {styles.signupPage}>
            <form onSubmit = {handleLogin}>
                <h1>Sign In</h1>
                <input placeholder = "Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type="submit">Sign In</button>
                <h4>
                    <span className ={styles.signupPage__gray}>New to Netflix?</span> 
                    <span className = {styles.signupPage__link}>Sign up now.</span> 
                </h4>
            </form>
        </div>
    );
}

export default SignUpPage
