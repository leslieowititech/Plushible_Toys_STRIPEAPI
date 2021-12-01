
import {BrowserRouter, Link} from 'react-router-dom';
import { TwoPartLogo } from '../NavBar';
import './Logo.css';

const Logo = ({firstPart, secondPart}:TwoPartLogo) => {
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