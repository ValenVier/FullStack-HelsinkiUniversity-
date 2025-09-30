import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (capital) {
            const apiKey = import.meta.env.VITE_API_KEY
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
                .then(response => {
                    setWeather(response.data)
                })
                .catch(error => {
                    console.log('Error fetching weather data:', error)
                    setWeather(null)
                })
        }
    }, [capital])

    if (!weather) {
        return <div>Loading weather data...</div>
    }

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <div><strong>temperature:</strong> {weather.main.temp} °C</div>
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                width="100"
            />
            <div><strong>wind:</strong> {weather.wind.speed} m/s</div>
        </div>
    )
}

export default Weather