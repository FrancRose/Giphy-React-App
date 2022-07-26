import React from "react";
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." />

            <div className="search-icon">
                <SearchIcon />
            </div>
        </div>
    );
}

export default SearchBar;