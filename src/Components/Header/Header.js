import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
// header component 
const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <nav>
            <div>
                <img src={logo} alt="" />
            </div>

            <div className='headerItem'>

                <CustomLink className='navItem' to="/shop">Shop</CustomLink>
                <CustomLink className='navItem' to="/orders">Order</CustomLink>
                <CustomLink className='navItem' to="/inventory">Inventory</CustomLink>
                <CustomLink className='navItem' to="/about">About</CustomLink>

                {
                    user ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <CustomLink className='navItem' to="/login">Login</CustomLink>
                }
            </div>

        </nav>
    );
};

export default Header;