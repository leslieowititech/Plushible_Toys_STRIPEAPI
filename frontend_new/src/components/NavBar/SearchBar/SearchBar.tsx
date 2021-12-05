import React, {useContext} from 'react';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css';
import { SearchBarContext } from '../../../context/SearchBarContext';



const SearchBar: React.FC = () => {
    const { searchPhrase, setSearchPhrase } = useContext(SearchBarContext)
    return (
        <div className='search-bar-container'>
            <SearchIcon className='search-bar-icon' />
            <input placeholder={`Search a plushible... `} className='search-bar-input' value={searchPhrase} onChange={e => setSearchPhrase(e.target.value)}/>
        </div>
    )
}

export default SearchBar;