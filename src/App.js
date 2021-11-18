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

    feelsLike: '',
    humidity:'',
    sunrise:'',
    sunset:'',
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
    console.log(weather)
  }, [])


  return (
    <div className="App">
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
            <Context.Provider value={{ weather, iconUrl }} >
            {weather && <Details /> }
          </Context.Provider>
           } />
      </Routes>
      

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
