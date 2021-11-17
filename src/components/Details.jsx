import React, { useContext, useState } from 'react'
import Context from './Context'

// icon!!

const Details = () => {
    const { weather, iconUrl } = useContext(Context)
    const { temp, high, low, feelsLike } = weather
    const [tempConvert, setTempConvert] = useState({
      temp: temp,
      high: high,
      low: low,
      feelsLike: feelsLike
    })

    const handleConverter = (unit) => {
        if(unit === 'f') {
          setTempConvert({
            temp: (temp * 1.8) + 32,
            high: (high * 1.8) + 32,
            low: (low * 1.8) + 32,
            feelsLike: (feelsLike * 1.8) + 32
          })
        } else {
          setTempConvert({
            temp: temp,
            high: high,
            low: low,
            feelsLike: feelsLike
          }) 
        }
      }

// sunrise/sunset
// let unix_timestamp = 1549312452
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var date = new Date(unix_timestamp * 1000);
// // Hours part from the timestamp
// var hours = date.getHours();
// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();
// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();

// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return (
    <div className="weatherDetails">
        <div className="city">{weather.cityName}</div>
        <div className="icon"><img src={iconUrl} alt={weather.icon} /></div>
        <div className="weather">{weather.weather}</div>
        <div className="temp-current" >Current {Math.floor(tempConvert.temp)} &deg;C</div>
        <div className="temp-min" >High {Math.floor(tempConvert.high)} &deg;C</div>
        <div className="temp-max" >Low {Math.floor(tempConvert.low)} &deg;C</div>
        <div className="temp-current" >Feels Like {Math.floor(tempConvert.feelsLike)} &deg;C</div>
        <div className="weather">Humidity{weather.humidity} %</div>
        <div className="city">{weather.sunrise}</div>
        <div className="city">{weather.sunset}</div>

        <div>
              <button onClick={() => {handleConverter('c')}}>&deg;C</button>
              <button onClick={() => {handleConverter('f')}}>&deg;F</button>
            </div>

        
    </div>
  )
}

export default Details
