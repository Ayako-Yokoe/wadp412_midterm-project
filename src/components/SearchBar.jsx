import React, { useContext } from 'react'
import Context from './Context'
import "../styles/SearchBar.css"

const SearchBar = () => {
    const { setCity, searchWeather } = useContext(Context)

  return (
    <div className="searchBar-container">
        <input
        className="searchBar-input" 
        type="text"
        onChange={(e) => setCity(e.target.value)}
        />
        <button
        className="searchBar-btn" 
        onClick={searchWeather}
        >
        Search
        </button>
    </div>
   )
}

export default SearchBar
