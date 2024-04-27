import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"; // Import CSS file for styling

const SignUp = () => {
    const [username,setusername]=useState("");
    const [pwd,setpwd]=useState("")
    const [result,setres]=useState("")
    const [status,setstatus]=useState(false)
    const navigate=useNavigate()

    const usernamefunc=(e)=>{
        setusername(e.target.value)
    }

    const pwdfunc=(e)=>{
        setpwd(e.target.value)
        const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const res= regexPattern.test(pwd);
        
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const res= regexPattern.test(pwd);
        
        if(pwd.length>0 && username.length>0){
            if(res===false){
                alert("Use strong password")
            }
            else{
                navigate("/")
            }
            // Cookies.set("result","success")
           
        }
        else{
            setres("*Inputs should not be empty")
        }
        localStorage.setItem("username",username)
        localStorage.setItem("pwd",pwd)
    }
    return (
        <div className="signup-container"> {/* Use a container for styling */}
            <h2>Sign Up</h2>
            <div className="form-container">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Enter your username"  onChange={usernamefunc}/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" onChange={pwdfunc}/>
                <button onClick={handlesubmit}>Sign Up</button>
                <p>{result}</p>
                <div className="login-link">
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
