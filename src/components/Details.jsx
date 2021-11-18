import React, { useContext, useState } from 'react'
import Context from './Context'
import '../styles/Details.css'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import InvertColorsIcon from '@mui/icons-material/InvertColors';


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
        <div className="detail-date">{time.month} {time.day}</div>
        <div className="detail-time">{time.hour} : {time.minute}</div>
        <div className="detail-icon"><img src={iconUrl} alt={weather.icon} /></div>

        {/* <div className="detail-data">
          <div>
            <p>Current</p>
            <p>{Math.floor(tempConvert.temp)} &deg;C</p>
          </div>
          <div>
            <p>High</p>
            <p>{Math.floor(tempConvert.high)} &deg;C</p>
          </div>
          <div>
            <p>Low</p>
            <p>{Math.floor(tempConvert.low)} &deg;C</p>
          </div>
          <div>
            <p>Feels Like </p>
            <p>{Math.floor(tempConvert.feelsLike)} &deg;C</p>
          </div>
          <div>
            <p>Humidity</p>
            <p>{weather.humidity} %</p>
          </div> */}

          {/* grid */}

          <div>Current &nbsp; <DeviceThermostatIcon />  &nbsp; <span className="detail-data">{Math.floor(tempConvert.temp)} &deg;C</span></div>
          <div>High &nbsp; <ArrowCircleUpIcon /> &nbsp;  <span className="detail-data">{Math.floor(tempConvert.high)} &deg;C</span></div>
          <div>Low  &nbsp; <ArrowCircleDownIcon /> &nbsp;  <span className="detail-data">{Math.floor(tempConvert.low)} &deg;C</span></div>
          <div>Feels Like &nbsp; <AccessibilityNewIcon /> &nbsp; <span className="detail-data">{Math.floor(tempConvert.feelsLike)} &deg;C</span></div>
          <div>Humidity &nbsp; <InvertColorsIcon /> &nbsp; <span className="detail-data">{weather.humidity} %</span></div>

        <div className="detail-tempUnit">
              <button className="detail-unitBtn" onClick={() => {handleConverter('c')}}>&deg;C</button>
              <button className="detail-unitBtn" onClick={() => {handleConverter('f')}}>&deg;F</button>
            </div>

      </div>
    </div>
  )
}

export default Details
