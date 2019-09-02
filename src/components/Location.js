import React from 'react'

function Location({ weather }) {
    return (
        <div>
            <h2 className="location__title">{weather ? weather.data.location.tz_id : "Unfortunately an error has occured, the weather forecast is currently unavailable"}</h2>
        </div>
    )
}

export default Location
