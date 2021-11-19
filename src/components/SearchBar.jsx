import React, { useContext } from 'react'
import Context from './Context'
import "../styles/SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const { setCity, searchWeather } = useContext(Context)

  return (
    <div className="searchBar-container">
        <input
        className="searchBar-input" 
        type="text"
        placeholder="Enter a City Name ..."
        onChange={(e) => setCity(e.target.value)}
        />
        <button
        className="searchBar-btn"
        onClick={searchWeather}
        >
        <SearchIcon />
        </button>
    </div>
   )
}

export default SearchBar
