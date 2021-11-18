import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar';
import WeatherResult from './components/WeatherResult';
import Context from './components/Context';
import Details from './components/Details';
import { Routes, Route } from 'react-router-dom'

function App() {
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
    humidity:''
  })
  const [time, setTime] = useState({
    month: '',
    day: '',
    hour: '',
    minute: ''
  })

const handleTimeConverter = (timestamp) => {
  const milliseconds = timestamp * 1000
  const date = new Date(milliseconds)
  setTime({
    month: date.toLocaleString('en-US', {month: 'long'}),
    day: date.toLocaleString('en-US', {day: 'numeric'}),
    hour: date.toLocaleString('en-US', {hourCycle: 'h23', hour: '2-digit'}),
    minute: date.toLocaleString('en-US', {minute: '2-digit'})
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
      .catch((error) => alert('No Such City Found'))
      setCity('')
  }

  useEffect(() => {
    searchWeather()
  }, [])


  return (
    <div className="App" onLoad={() => {handleTimeConverter(weather.dt)}}>
      <div className={(time.hour > 18 || time.hour < 6) ? 'app-night' : 'app-day'}>
        <div className="appContainer">
       <Routes>
        <Route 
          path="/" 
          element={ 
            <Context.Provider value={{ setCity, searchWeather, weather, iconUrl }} >
            <SearchBar  />
            {weather && <WeatherResult />}
          </Context.Provider>
          } />

        <Route 
          path="/details" 
          element={ 
            <Context.Provider value={{ weather, iconUrl, time }} >
            {weather && <Details /> }
          </Context.Provider>
           } />
        </Routes>
        </div>
      </div>

      {/* <Routes>
      <Route path="/" element={ <App />} />
      <Route path="/details" element={ <Details /> } />
      </Routes>
      
      <Context.Provider value={{ setCity, searchWeather, weather, iconUrl }} >
        <SearchBar  />
        {weather && <WeatherResult />}
        
      </Context.Provider>

      <Context.Provider value={{ weather }} >
        hello
        {weather && <Details /> }
        
      </Context.Provider> */}

      
    </div>
  );
}

export default App;
