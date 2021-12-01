import React, {useState} from "react";

import CartIcon from "./CartIcon";
import './Header.css';
import { PlushibleProps } from "../App";

const Header = ({ quantity }: PlushibleProps) => {
    const [loggedIn, setLogin] = useState(false)
    const [logInText, setLoginText] = useState('Login')
    return (
        <div className='header'>
            <div className='header-left logo'>
                <h1>Plushible <span>Shop</span></h1>
            </div>
            <div className='header-middle search-bar'>
                <input placeholder='Search for plushible' className='plushible-search'/>
            </div>
            <div className='header-right'>
                <a href='/cart'>
                    <CartIcon quantity={quantity}/>
                </a>
                <a href='/profile'>
                    <img src={process.env.PUBLIC_URL + '/assets/profile_icon.svg'} alt='profile icon'/>
                </a>
                <button>{logInText}</button>
            </div>

        </div>
    )
}

export default Header;