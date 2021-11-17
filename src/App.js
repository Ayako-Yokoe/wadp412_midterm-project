import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar';
import WeatherResult from './components/WeatherResult';
import Context from './components/Context';


function App() {
  const [city, setCity] = useState('Vancouver')
  const [weather, setWeather] = useState({
    cityName: '',
    icon: '',
    weather: '',
    temp: '',
    high: '',
    low: ''
    // humidity:'',
    // sunrise:'',
    // sunset:''
  }
  )

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
  const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`

  // const api_call = async e => {
  //   e.preventDefault()
  //   const location = e.target.elements.city.value
  //   if (!location) {
  //     return setError("Please enter the name of the city"), setWeather(null)
  //   }
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  //   const request = axios.get(url)
  //   const response = await request



  const searchWeather = async () => {
      axios.get(url)
      .then((response) => {setWeather({
            cityName: response.data.name,
            icon: response.data.weather[0].icon,
            weather: response.data.weather[0].description,
            temp: response.data.main.temp,
            high: response.data.main.temp_max,
            low: response.data.main.temp_min,
          })
        })
      .catch((error) => alert('Not Found'))
      setCity('')
  }

  useEffect(() => {
    searchWeather()
  }, [])


  return (
    <div className="App">

      <Context.Provider value={{ setCity, searchWeather, weather, iconUrl }} >
        <SearchBar  />
        {weather && <WeatherResult />}
      </Context.Provider>
      
    </div>
  );
}

export default App;
