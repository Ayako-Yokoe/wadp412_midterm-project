import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar';
import WeatherResult from './components/WeatherResult';
import Context from './components/Context';
import './App.css';

function App() {
  const [errorMessage, setErrorMessage] = useState(false)
  const [city, setCity] = useState('Vancouver')
  const [weather, setWeather] = useState({
    cityName: '',
    icon: '',
    weather: '',
    temp: '',
    high: '',
    low: '',
    dt: '',
    feelsLike: '',
    humidity:'',
  })
  const [time, setTime] = useState({
    hour: ''
  })

  const handleTimeConverter = () => {  
    const date = new Date()
    setTime({
      hour: date.toLocaleString('en-US', {hourCycle: 'h23', hour: '2-digit'}),
    })
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
  const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`

  const searchWeather = () => {      
      axios.get(url)
      .then((response) => {setWeather({
            cityName: response.data.name,
            icon: response.data.weather[0].icon,
            weather: response.data.weather[0].description,
            temp: response.data.main.temp,
            high: response.data.main.temp_max,
            low: response.data.main.temp_min,
            dt: response.data.dt,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
          })
        })
      .catch((err) => {
        setErrorMessage(true)
      })
      setErrorMessage(false)
  }

  useEffect(() => {
    searchWeather()
  }, [])


  return (
    <div className="App" onLoad={() => {handleTimeConverter(weather.dt)}}>
      <div className={(time.hour > 18 || time.hour < 6) ? 'app-night' : 'app-day'}>
        <div className="appContainer">
        <Context.Provider value={{ weather, iconUrl, time, errorMessage, setErrorMessage, setCity, searchWeather }} >
          <SearchBar  />
          {weather && <WeatherResult />}
        </Context.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
