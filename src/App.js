import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar';
import WeatherResult from './components/WeatherResult';
import Context from './components/Context';
import './App.css';


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
    humidity:'',
    timezone: ''
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

        <Context.Provider value={{ setCity, searchWeather, weather, iconUrl, time }} >
          <SearchBar  />
          {weather && <WeatherResult />}
        </Context.Provider>
        
      </div>
      </div>
    </div>
  );
}

export default App;
