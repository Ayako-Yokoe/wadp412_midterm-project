import React, { useContext, useState } from 'react'
import Context from './Context'
import '../styles/Details.css'

// icon!!

const Details = () => {
    const { weather, iconUrl, time } = useContext(Context)
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
  
      // var timestamp = 1607110465663
      // var date = new Date(timestamp);
      
      // console.log("Date: "+date.getDate()+
      //           "/"+(date.getMonth()+1)+
      //           "/"+date.getFullYear()+
      //           " "+date.getHours()+
      //           ":"+date.getMinutes()+
      //           ":"+date.getSeconds());

      // String(date.getMinutes()).padStart(2, "0"); 
      
    // handleTimeConverter = (timestamp) => {
    //   return (`${timestamp.month} ${timestamp.date} ${timestamp.hour} : ${timestamp.minute}`)
    // }

  return (
    <div className="weatherDetails">
      <div className="detailsContainer">
        <div className="detail-city">{weather.cityName}</div>
        <div className="detail-date-time">{time.month} {time.day} {time.hour} : {time.minute}</div>
        <div className="detail-icon"><img src={iconUrl} alt={weather.icon} /></div>
        <div className="detail-weather">{weather.weather}</div>
        <div className="detail-temp-current" >Current {Math.floor(tempConvert.temp)} &deg;C</div>
        <div className="detail-temp-max" >High {Math.floor(tempConvert.high)} &deg;C</div>
        <div className="detail-temp-min" >Low {Math.floor(tempConvert.low)} &deg;C</div>
        <div className="detail-feels-like" >Feels Like {Math.floor(tempConvert.feelsLike)} &deg;C</div>
        <div className="detail-humidity">Humidity {weather.humidity} %</div>

        <div className="detail-tempUnit">
              <button className="detail-unitBtn" onClick={() => {handleConverter('c')}}>&deg;C</button>
              <button className="detail-unitBtn" onClick={() => {handleConverter('f')}}>&deg;F</button>
            </div>

      </div>
    </div>
  )
}

export default Details
