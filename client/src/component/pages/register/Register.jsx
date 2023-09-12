import { useRef, useState } from "react";
import "./register.scss";
import {  useNavigate } from "react-router-dom";
import { registerUser } from "../../../context/authContext/authApi";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const emailRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish = async (e) => {
        e.preventDefault();
        const userData = { username, email, password };
        registerUser(userData);
        navigate("/login");
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="logo"
                    />
                    
                        <button className="loginButton" onClick={()=>navigate("/login")}>Sign In</button>
                    
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    !email ?

                        (<div className="input">
                            <input type="email" name="email" placeholder="Email address" ref={emailRef} />
                            <button className="registerButton" onClick={handleStart}>Get Started</button>
                        </div>) :
                        (<form className="input">
                            <div className="secondInput">
                                <input type="username" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                                <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                                <button className="registerButton" onClick={handleFinish}>Start</button>
                            </div>
                        </form>)
                }
            </div>

        </div>
    )
}

export default Register;