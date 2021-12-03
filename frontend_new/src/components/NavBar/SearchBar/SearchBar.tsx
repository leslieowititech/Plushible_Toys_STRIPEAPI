import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    return (
        <div className='search-bar-container'>
            <SearchIcon className='search-bar-icon' />
            <input placeholder={`Search a plushible... `} className='search-bar-input' />
        </div>
    )
}

export default SearchBar;