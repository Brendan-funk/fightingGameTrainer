import React, {useState, useRef, useEffect, useContext} from "react";
import axios from "axios";
import AuthContext from "./context/AuthProvider";

export const Login = () => {
    const { setAuth } = useContext(AuthContext);

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.get("/login", {
                params: {
                    userEmail: email, 
                    password: pass
                }
            })
            setAuth({ data.rows[0].name})
            setEmail('')
            setPass('')
            setSuccess(true);
        } catch (err) {
            if(!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing email or password')
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('')
    }, [email, pass]);

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    required
                />
                <button>Log In</button>
            </form>
            <p>Don't have an account?</p>
            <span className = "line">
                {/* put router link here */}
                <a href = "#">Register</a>
            </span>
            
        </section>
    )
}