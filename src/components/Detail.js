import React from 'react'
import moment from 'moment';

function Detail({ weather }) {
    if (weather) {

        const today = weather.date;
        const day = moment(today).format('dddd');

        return (
            <article className='current__container'>
                <time className="current__weekday">{day}</time>
                <img className="current__icon" src={`https:${weather.data.current.condition.icon}`} alt='example weather condition, clear sunny blue skies'></img>
                <p className="current__description">{weather.data.current.condition.text}</p>
                <h3 className="current__temp">Currently {weather.data.current.temp_c}º</h3>
            </article>
        )
    } else {
        return "Unfortunately an error has occured, the weather forecast is currently unavailable"
    }

}

export default Detail
