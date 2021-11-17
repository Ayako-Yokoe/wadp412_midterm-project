import React, { useContext, useState } from 'react'
import Context from './Context'


const WeatherResult = () => {
  const { weather, iconUrl } = useContext(Context)

  // const [unit, setUnit] = useState('c')
  const [tempConvert, setTempConvert] = useState({
    temp: weather.temp,
    high: weather.high,
    low: weather.low
  })

  const handleConverter = (unit) => {
    if(unit === 'f') {
      setTempConvert({
        temp: (weather.temp * 1.8) + 32,
        high: (weather.high * 1.8) + 32,
        low: (weather.low * 1.8) + 32
      })
    } else {
      setTempConvert({
        temp: weather.temp,
        high: weather.high,
        low: weather.low
      }) 
    }
  }

  return (
    <div className="weatherContainer">

      <div className="weatherContainer">
            <div className="city">{weather.cityName}</div>
            <div className="icon"><img src={iconUrl} alt={weather.icon} /></div>
            <div className="weather">{weather.weather}</div>
            <div className="temp-current" temp={weather.temp} >{Math.floor(tempConvert.temp)} &deg;C</div>
            <div>
              <div className="temp-min" temp={weather.high} >{Math.floor(tempConvert.high)} &deg;C</div>
              <div className="temp-max" temp={weather.low} >{Math.floor(tempConvert.low)} &deg;C</div>
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
