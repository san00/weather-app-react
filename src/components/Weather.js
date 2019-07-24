import React, { useState, useEffect } from 'react'

function Weather() {

  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function fetchData() {

      const ApiResponse = await fetch("http://api.openweathermap.org/data/2.5/find?q=London&units=metric&APPID=acf36c53e0cb19a243cddafb31118863");
      const data = await ApiResponse.json();
      console.log(data);
      
      setForecast(data);
    }
    fetchData();
   
  }, []);

  return (
    <div className='weather'>
      <h1 className='city'>{forecast ? forecast.list[0].name : 'loading...'}</h1>
      <img className='icon' src={ forecast ? `http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png` : 'loading...'} alt='weather icon'></img>
      <p className='temperature'>{forecast ?  Math.round(forecast.list[0].main.temp) : 'loading...'} oC</p>
      <p className='description'>{forecast ? forecast.list[0].weather[0].description : 'loading...'}</p>
    </div>
  )
}

export default Weather

