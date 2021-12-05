import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

export interface SearchBarProps {
    searchPhrase: string;
    setSearchPhrase: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({ searchPhrase, setSearchPhrase }) => {
    return (
        <div className='search-bar-container'>
            <SearchIcon className='search-bar-icon' />
            <input placeholder={`Search a plushible... `} className='search-bar-input' value={searchPhrase} onChange={e => setSearchPhrase(e.target.value)}/>
        </div>
    )
}

export default SearchBar;