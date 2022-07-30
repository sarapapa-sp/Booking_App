import "./Login.css";
import {useContext, useState} from "react";
import {AuthContext} from "../../Context/AuthContext";
import axios from "axios";

function Login(props) {
    const[creadentials,setCreadentials] = useState(
        {
            username:undefined,
            password:undefined,
        }
    )

    const {loading,err,dispatch} = useContext(AuthContext)

    const handleChange = (e) => {
        setCreadentials(prev => ({
            ...prev,
            [e.target.id]:e.target.value
        }))
    }
    const handleLogin =async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const response = await axios.post("http://localhost:8080/api/auth/login",creadentials)
            dispatch({type:"LOGIN_SUCCESS",payload:response.data})
        }catch (err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
        }
    }




    return (
        <div className="login">
            <div className="login-container">
                <input
                    className="login-input"
                    placeholder="username"
                    type="text"
                    id="username"
                    onChange={(e)=>handleChange(e)}
                />
                <input
                    className="login-input"
                    placeholder="username"
                    type="password"
                    id="password"
                    onChange={(e)=>handleChange(e)}
                />
                <button
                    onClick={handleLogin}
                    className="login-button">Login</button>
                {err &&
                <span>{err.status}{err.message}</span>
                }
            </div>
        </div>
    );
}

export default Login;