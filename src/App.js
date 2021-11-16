import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
// import WeatherDetail from './components/WeatherDetail';

function App() {
  const [city, setCity] = useState('')
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

  const [dataLoaded, setDataLoaded] = useState(false)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}`

  const searchWeather = () => {
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
    setDataLoaded(true)
  }
  

  // const searchCity = async () => {
  //   e.preventDefault()
    
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.REACT_APP_WEATHER_API}`
  //   const response = await axios.get(url)
  //   setWeather(response)
  //   setCity(response.data.name)

  //   if(!city){
  //     setWeather(null)
  //     return alert('Not Found')
  //   }
  // }

  // useEffect(() => {
  //   searchCity()
  // }, [])



  //   useEffect(() => (
  //     axios.get(url)
  //     .then((response) => {
  //       setWeather({
  //         cityName: response.data.name,
  //         icon: response.data.weather[0].icon,
  //         weather: response.data.weather[0].description,
  //         temp: response.data.main.temp,
  //         high: response.data.main.temp_max,
  //         low: response.data.main.temp_min
  //       })
  //       setQueryCity('')
  //     }, [])
  //     ))


  return (
    <div className="App">
      <input 
      type="text"
      onChange={(e) => {
        setCity(e.target.value)
      }} 
      />
      <button onClick={searchWeather}>Search</button>
      {dataLoaded &&
      <div className="weatherContainer">
        <div className="city">{weather.cityName}</div>
        <div className="icon">{weather.icon}</div>
        <div className="weather">{weather.weather}</div>
        <div className="temp-current">{weather.temp}</div>
        <div>
          <div className="temp-min">{weather.high}</div>
          <div className="temp-max">{weather.low}</div>
        </div>
      </div>}



{/* 
      <div className="searchContainer">
      <form onSubmit={searchCity}>
        <input 
          className="searchBar" 
          type="text" 
          placeholder="Enter a City Name"
          onChange={(e) => setQueryCity(e.target.value)}
          value={queryCity} 
        />
      </form>
      </div> */}

      {/* <div className="searchContainer">
        <input 
          className="searchBar" 
          type="text" 
          placeholder="Enter a City Name"
          onChange={(e) => setQueryCity(e.target.value)}
          value={queryCity} 
          onKeyPress={searchCity}
        />
      </div> */}

      {/* <div className="weatherContainer">
        <div className="city">{weather.data.name}</div> */}
        {/* <div className="icon">{icon}</div>
        <div className="weather">{description}</div>
        <div className="temp-current">{temp}</div>
        <div>
          <div className="temp-min">{temp_min}</div>
          <div className="temp-max">{temp_max}</div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
