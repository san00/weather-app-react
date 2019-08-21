import React from 'react'
import moment from 'moment';

function SingleDay(props) {
    const today = props.weatherData.date;
    const day = moment(today).format('dddd');

    return (
        <article className="single-day__container">
            <time className="single-day__weekday">{day}</time>
            <img className="single-day__icon" src={`https:${props.weatherData.day.condition.icon}`} alt='weather icon'></img>
            <div className="single-day__temp-container" >
                <h4 className="single-day__temp-h">{Math.round(props.weatherData.day.maxtemp_c)}º</h4>
                <h4 className="single-day__temp-l">{Math.round(props.weatherData.day.mintemp_c)}º</h4>
            </div>
            <p className="single-day__description">{props.weatherData.day.condition.text}</p>
        </article>
    )
}

export default SingleDay