import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css';

import { SearchBarProps } from './SearchBar/SearchBar';

const NavBar: React.FC<SearchBarProps> = ({ searchPhrase, setSearchPhrase}) => {
    
    return (
        <div className='nav-bar-continer'>
            <Logo firstPart={'Plushible'} secondPart={'Toys'} />
            <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase}/>
            <ShoppingCartIcon />
        </div>
    )
}

export default NavBar;