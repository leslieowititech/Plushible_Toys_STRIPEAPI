import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Logo.css';

interface LogoProps {
    firstPart: string;
    secondPart: string
}

const Logo: React.FC<LogoProps> = ({ firstPart, secondPart }) => {
    return (
        <div className='logo-container'>
            <BrowserRouter>
                <Link to='/'>
                    <h1>{firstPart} <span>{secondPart}</span></h1>
                </Link>
            </BrowserRouter>


        </div>
    )
}

export default Logo;