import React from 'react';
import logo from '../img/logo.png';
import './logo.css';
export default function Logo() {
    return (
        <div>
            {/* <h1>Hello Dudes</h1> */}
            <img src={logo} className='logo'/>
        </div>
    )
}
