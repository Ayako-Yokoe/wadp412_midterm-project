import React, { useContext } from 'react'
import Context from './Context'
import SearchIcon from '@mui/icons-material/Search'
import "../styles/SearchBar.css"

const SearchBar = () => {
    const { setCity, searchWeather, handleKeypress } = useContext(Context)


  return (
    <div className="searchBar-container">
        <input
        className="searchBar-input" 
        type="text"
        placeholder="Enter a City Name ..."
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeypress}
        />
        <button
        className="searchBar-btn"
        type="submit"
        onClick={searchWeather}
        // ref={node => (this.btn = node)}
        >
        <SearchIcon />
        </button>
    </div>
   )
}

export default SearchBar
