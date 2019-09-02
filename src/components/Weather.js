import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleDay from './SingleDay';
import Detail from './Detail';
import Location from './Location';

function Weather() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchData = async () => {

      const ApiResponse = await axios.get("https://ipapi.co/json/");
      const lat = ApiResponse.data.latitude;
      const lon = ApiResponse.data.longitude;
      const callWeather = await axios.get(`https://api.apixu.com/v1/forecast.json?key=043d3a0fb3e945d0a4d181246162911&q=${lat},${lon}&days=5`);

      setWeather(callWeather);
    }
    fetchData();

  }, []);

  const forecast = weather ? (
    weather.data.forecast.forecastday.map((weatherData, index) => {
      return (
        <SingleDay weatherData={weatherData} key={index} index={index}/>
      )
    })) : "Unfortunately an error has occured, the weather forecast is currently unavailable"

  return (
    <section className='weather'>
      <div className="location">
        <Location weather={weather}/>
      </div>
      <div className='current'>
        <Detail weather={weather}/>
      </div>
      <div className="single-day">
        {forecast}
      </div>
    </section>
  )
}

export default Weather