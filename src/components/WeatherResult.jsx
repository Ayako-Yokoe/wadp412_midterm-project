import React, { useContext, useState } from 'react'
import Context from './Context'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import InvertColorsIcon from '@mui/icons-material/InvertColors'
import "../styles/WeatherResult.css"

const WeatherResult = () => {
  const { weather, iconUrl } = useContext(Context)
  const { temp, high, low, feelsLike } = weather
  const [tempConvert, setTempConvert] = useState({
    temp: Math.floor(temp),
    high: Math.floor(high),
    low: Math.floor(low),
    feelsLike: Math.floor(feelsLike)
  })
  const [ fahrenheit, setFahrenheit] = useState(false)

  const handleConverter = (unit) => {
    if(unit === 'f') {
      setTempConvert({
        temp: Math.floor((temp * 1.8) + 32),
        high: Math.floor((high * 1.8) + 32),
        low: Math.floor((low * 1.8) + 32),
        feelsLike: Math.floor((feelsLike * 1.8) + 32)
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
            <p>{!fahrenheit ? Math.floor(temp) : tempConvert.temp} &deg;{fahrenheit ? 'F' : 'C'}</p>
            <p><ArrowCircleUpIcon /> High</p>
            <p>{!fahrenheit ? Math.floor(high) : tempConvert.high} &deg;{fahrenheit ? 'F' : 'C'}</p>
            <p><ArrowCircleDownIcon /> Low</p>
            <p>{!fahrenheit ? Math.floor(low) : tempConvert.low} &deg;{fahrenheit ? 'F' : 'C'}</p>
            <p><AccessibilityNewIcon /> Feels Like </p>
            <p>{!fahrenheit ? Math.floor(feelsLike) : tempConvert.feelsLike} &deg;{fahrenheit ? 'F' : 'C'}</p>
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
