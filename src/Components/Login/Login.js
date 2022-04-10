import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import google from '../../images/985_google_g_icon.jpg'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth); 

    
    const location = useLocation(); //for private router
    const from = location.state?.from?.pathname || './' //for private router

    const navigate = useNavigate() // get react-router-dom
    if (user) {
        navigate(from,{replace:true})  //prothome eta kora hoiche 
    }


    const handleEmailBlur = event => {//for email
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {//for password
        setPassword(event.target.value)
    }
    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }



    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <button className='btn-login' type='submit' value='Login'>Login</button>
                </form>
                <p style={{ textAlign: 'center' }}>New to Ema-John? <Link style={{ textDecoration: 'none', color: '#FF9900' }} to='/signup'>Create an account</Link> </p>
                <div className='another-way'>
                    <hr className='or-line' />
                    <p>or</p>
                    <hr className='or-line' />
                </div>
                <div className='another-option'>
                    <img className='google-photo' src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;