import React, { useContext } from 'react'
import Context from './Context'

const SearchBar = () => {
    const { setCity, searchWeather } = useContext(Context)

  return (
    <div>
        <input 
        type="text"
        onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={searchWeather}>Search</button>
    </div>
   )
}

export default SearchBar
