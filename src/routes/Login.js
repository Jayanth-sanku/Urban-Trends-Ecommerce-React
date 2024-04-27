import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"; // Import CSS file for styling

const Login = () => {
    const [username,setusername]=useState("")
    const [pwd,setpwd]=useState("")
    const [res,setres]=useState("")
    const history = useNavigate();
    const onsubmit=(event)=>{
        event.preventDefault();
        const savedusername=localStorage.getItem("username")
        const savedpwd=localStorage.getItem("pwd")
        // Cookies.set("result","success")
        setusername("")
        setpwd("")
        if(savedusername===username && savedpwd===pwd){
            history("/land")
        }
        else{
            setres("*Incorrect username or password")
        }
    }
    const usernamefunc=(e)=>{
        setusername(e.target.value)
        if(username.length===0 || pwd.length===0){
            setres("")
        }
    }

    const pwdfunc=(e)=>{
        setpwd(e.target.value)
        if(username.length===0 || pwd.length===0){
            setres("")
        }
    }
    return (
        <div className="login-container"> {/* Use a container for styling */}
            <h2>Login</h2>
            <div className="form-container">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Enter your username" onChange={usernamefunc}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" onChange={pwdfunc}/>
                <button  onClick={onsubmit}><Link to="/land">Login</Link></button>
                <p className="res">{res}</p>
                <div className="signup-link">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
