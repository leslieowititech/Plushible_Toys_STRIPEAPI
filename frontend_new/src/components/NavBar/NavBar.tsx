import React, {useContext}  from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css';
import { CartContext } from '../../context/CartItemsContext';


const NavBar: React.FC = () => {
    const {quantity} = useContext(CartContext);
    
   
    return (
        <div className='nav-bar-continer'>
            <Logo firstPart={'Plushible'} secondPart={'Toys'} />
            <SearchBar/>
            <div className='nav-bar-cart-icon'>
                <a href='/cart'>
                    <span >{quantity}</span>
                    <ShoppingCartIcon />
                </a>
            </div>
        </div>
    )
}

export default NavBar;