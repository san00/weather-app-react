import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleDay from './SingleDay';
import moment from 'moment';

function Weather() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchData = async () => {

      const ApiResponse = await axios.get("https://ipapi.co/json/");
      const lat = ApiResponse.data.latitude;
      const lon = ApiResponse.data.longitude;
      const callWeather = await axios.get(`https://api.apixu.com/v1/forecast.json?key=043d3a0fb3e945d0a4d181246162911&q=${lat},${lon}&days=5`);

      setWeather(callWeather);
      console.log(callWeather);
    }
    fetchData();

  }, []);

  const forecast = weather ? (
    weather.data.forecast.forecastday.map((weatherData, index) => {
      return (
        <SingleDay weatherData={weatherData} key={index} index={index} />
      )
    })) : "Unfortunately an error has occured, the weather forecast is currently unavailable"

  const locationName = <h2 className="location__title">{weather ? weather.data.location.tz_id : "Unfortunately an error has occured, the weather forecast is currently unavailable"}</h2>

  const forecastDetail = weather ? (<article className='current__container'>
    <time className="current__weekday">{moment(weather.data.current.last_updated).format('dddd')}</time>
    <img className="current__icon" src={`https:${weather.data.current.condition.icon}`} alt='example weather condition, clear sunny blue skies'></img>
    <p className="current__description">{weather.data.current.condition.text}</p>
    <h3 className="current__temp">Currently {weather.data.current.temp_c}º</h3>
  </article>) : "Unfortunately an error has occured, the weather forecast is currently unavailable"

  return (
    <section className='weather'>
      <div className="location">
        {locationName}
      </div>
      <div className='current'>
        {forecastDetail}
      </div>
      <div className="single-day">
        {forecast}
      </div>
    </section>
  )
}

export default Weather