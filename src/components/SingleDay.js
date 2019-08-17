import React from 'react'

function SingleDay(props) {
    return (
        <article>
            <img src={`https:${props.weatherData.day.condition.icon}`} alt='weather icon'></img>
            <h3>{Math.round(props.weatherData.day.mintemp_c)}º</h3>
            <h3>{Math.round(props.weatherData.day.maxtemp_c)}º</h3>
            <p>{props.weatherData.day.condition.text}</p>
            <p>Sunrise {props.weatherData.astro.sunset}</p>
            <time>{props.weatherData.date}</time>
        </article>
    )
}

export default SingleDay