import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css';


const NavBar: React.FC = () => {
    
    return (
        <div className='nav-bar-continer'>
            <Logo firstPart={'Plushible'} secondPart={'Toys'} />
            <SearchBar/>
            <ShoppingCartIcon />
        </div>
    )
}

export default NavBar;