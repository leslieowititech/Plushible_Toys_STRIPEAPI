import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css';
import { CartContext } from '../../context/CartContext';


const NavBar: React.FC = () => {
    const { itemCount } = useContext(CartContext);
    
    return (
        <div className='nav-bar-continer'>
            <Logo firstPart={'Plushible'} secondPart={'Toys'} />
            <SearchBar/>
            <div className='nav-bar-cart-icon'>
                {
                itemCount > 0 ? <span>{itemCount}</span>:null
                }
                
                <ShoppingCartIcon />
            </div>
        </div>
    )
}

export default NavBar;