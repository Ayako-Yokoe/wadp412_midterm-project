import React, { useContext, useState } from 'react'
import Context from './Context'

const WeatherResult = () => {
  const { weather, iconUrl } = useContext(Context)
  const { temp, high, low } = weather
  const [tempConvert, setTempConvert] = useState({
    temp: temp,
    high: high,
    low: low
  })

  const handleConverter = (unit) => {
    if(unit === 'f') {
      setTempConvert({
        temp: (temp * 1.8) + 32,
        high: (high * 1.8) + 32,
        low: (low * 1.8) + 32
      })
    } else {
      setTempConvert({
        temp: temp,
        high: high,
        low: low
      }) 
    }
  }

  return (
    <div className="weatherContainer">

      <div className="weatherContainer">
            <div className="city">{weather.cityName}</div>
            <div className="icon"><img src={iconUrl} alt={weather.icon} /></div>
            <div className="weather">{weather.weather}</div>
            <div className="temp-current" >{Math.floor(tempConvert.temp)} &deg;C</div>
            <div>
              <div className="temp-min" >{Math.floor(tempConvert.high)} &deg;C</div>
              <div className="temp-max"  >{Math.floor(tempConvert.low)} &deg;C</div>
            </div>
            <div>
              <button onClick={() => {handleConverter('c')}}>&deg;C</button>
              <button onClick={() => {handleConverter('f')}}>&deg;F</button>
            </div>

          </div>
      </div>
  )
}


export default WeatherResult
