import React, { useContext, useState } from 'react'
import Context from './Context'
import "../styles/WeatherResult.css"
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import InvertColorsIcon from '@mui/icons-material/InvertColors';

const WeatherResult = () => {
  const { weather, iconUrl } = useContext(Context)
  const { temp, high, low, feelsLike } = weather
  const [tempConvert, setTempConvert] = useState({
    temp: temp,
    high: high,
    low: low,
    feelsLike: feelsLike
  })
  const [ fahrenheit, setFahrenheit] = useState(false)

  const handleConverter = (unit) => {
    if(unit === 'f') {
      setTempConvert({
        temp: (temp * 1.8) + 32,
        high: (high * 1.8) + 32,
        low: (low * 1.8) + 32,
        feelsLike: (feelsLike * 1.8) + 32
      })
      setFahrenheit(true)
    } else {
      setTempConvert({
        temp: temp,
        high: high,
        low: low,
        feelsLike: feelsLike
      })
      setFahrenheit(false) 
    }
  }

  return (
    <div className="weatherResult">

      <div className="weatherContainer">
            <p className="city">{weather.cityName}</p>
            <p className="icon"><img src={iconUrl} alt={weather.icon} /></p>
            <p className="weather">{weather.weather}</p>

        <div className="detail-data">
            <p><DeviceThermostatIcon /> Current</p>
            <p>{Math.floor(tempConvert.temp)} &deg;{fahrenheit ? 'F' : 'C'}</p>
            <p><ArrowCircleUpIcon /> High</p>
            <p>{Math.floor(tempConvert.high)} &deg;{fahrenheit ? 'F' : 'C'}</p>
            <p><ArrowCircleDownIcon /> Low</p>
            <p>{Math.floor(tempConvert.low)} &deg;{fahrenheit ? 'F' : 'C'}</p>
            <p><AccessibilityNewIcon /> Feels Like </p>
            <p>{Math.floor(tempConvert.feelsLike)} &deg;{fahrenheit ? 'F' : 'C'}</p>
            <p><InvertColorsIcon /> Humidity</p>
            <p>{weather.humidity} %</p>
        </div>
     
            <div className="tempUnit">
              <button className="unitBtn" onClick={() => {handleConverter('c')}}>&deg;C</button>
              <button className="unitBtn" onClick={() => {handleConverter('f')}}>&deg;F</button>
            </div> 

        </div> 
    </div>
  )
}


export default WeatherResult
