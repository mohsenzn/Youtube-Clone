import React from 'react';
import youtube from './youtube.png'
import './loginScreen.scss'
const LoginScreen = () => {
    return (
        <div className="login">
        <div className="login_container">
            <img src={youtube} alt="" />
            <button >LoginScreen</button>

            <p>Some Data about Login </p>
        </div>
    </div>
    );
};

export default LoginScreen;