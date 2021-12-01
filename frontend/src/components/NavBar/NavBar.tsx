import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css';

export interface TwoPartLogo {
    firstPart: string
    secondPart: string
}

const NavBar = () => {
    const logoName: TwoPartLogo = {
        firstPart: 'Plushible',
        secondPart: 'Toys'
    }
    return (
        <div className='nav-bar-continer'>
            <Logo firstPart={logoName.firstPart} secondPart={logoName.secondPart}/>
            <SearchBar/>
            <ShoppingCartIcon/>
        </div>
    )
}

export default NavBar;