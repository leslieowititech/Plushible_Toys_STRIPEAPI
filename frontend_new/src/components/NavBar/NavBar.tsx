import React, {useContext, useRef, useEffect}  from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css';
import { CartContext } from '../../context/CartItemsContext';


const NavBar: React.FC = () => {
    const {quantity, setQuantity} = useContext(CartContext);
    const spanRef = useRef<HTMLSpanElement>(null!);
    console.log(spanRef.current?.textContent)
   
    return (
        <div className='nav-bar-continer'>
            <Logo firstPart={'Plushible'} secondPart={'Toys'} />
            <SearchBar/>
            <div className='nav-bar-cart-icon'>
                <span ref={spanRef}>0</span>
                <ShoppingCartIcon />
            </div>
        </div>
    )
}

export default NavBar;