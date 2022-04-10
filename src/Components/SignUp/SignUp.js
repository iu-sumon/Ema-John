import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import google from '../../images/985_google_g_icon.jpg'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userError, setUserError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        error] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate() // get react-router-dom
    if(user)
    {
        navigate('/shop')
    }


    const handleEmailBlur = event => {//for email
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {//for password
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {//for confirm password
        setConfirmPassword(event.target.value)
    }
    const handleCreateUser = event => { //for creating new user 
        event.preventDefault() //page reloading off

        if (password !== confirmPassword) {//validation for password
            setUserError('Password did not match');
            return;
        }
        if (password.length < 6) {
            setUserError('Password must be 6 characters or longer.')
            return;
        }
        //optional work  rex diye special character er validation kora jay 
        createUserWithEmailAndPassword(email, password)


    }

    
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Sign Up</h3>
                <form onSubmit={handleCreateUser} action="">

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' required />
                    </div>

                    <p style={{ color: 'red' }}>{userError}</p>
                    <p style={{ color: 'red' }}>{error}</p>

                    <button
                        className='btn-login' type='submit' value='Login'>Sign Up</button>

                </form>

                <p style={{ textAlign: 'center' }}>All ready have an Accout? <Link style={{ textDecoration: 'none', color: '#FF9900' }} to='/login'>Login</Link> </p>

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

export default SignUp;