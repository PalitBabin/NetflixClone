import { useContext, useState } from "react";
import {AuthContext} from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/authApi";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {isFetching,dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        const user = await login({email,password},dispatch);
        
        if(user){
            navigate("/");
        }
    }
    
    return (
        <div className="login">
            <div className="loginContainer">
                <form action="" className="loginForm">
                    <input 
                    type="text"
                    required 
                    placeholder="Email" 
                    className="loginInput" 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                    type="password" 
                    required 
                    placeholder="Password" 
                    className="loginInput"
                    onChange={(e)=>setPassword(e.target.value)} 
                    />
                    <button 
                    className="loginButton" 
                    onClick={handleLogin} 
                    disabled={isFetching}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;