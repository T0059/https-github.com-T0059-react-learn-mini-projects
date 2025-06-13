import React, { useEffect, useRef, useState } from "react";
import './Weather.css'
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const Weather = () =>{

    const [weatherData, setWeatherData]=useState(false);
    const inputRef = useRef();
    const allIcons={
        "01d":clear,
        "02d":cloud,
        "03d":drizzle,
        "04d":cloud,
        "09d":rain,
        "10d":rain,
        "11d":snow,
        "13d":snow,
        "50d":cloud,
        "01n":clear,
        "02n":cloud,
        "03n":drizzle,
        "04n":cloud,
        "09n":rain,
        "10n":rain,
        "11n":snow,
        "13n":snow,
        "50n":cloud
    }
    const search = async (city) => {
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear;
            setWeatherData({
                humidity: data.main.humidity,
                wind: data.wind.speed,
                temp: Math.floor(data.main.temp),
                location: data.name,
                icon:icon
            });

        } catch (error) {
            
        }
    }
    useEffect(() => {
        search('London');
    },[])

    return(
    <div className="weather">
        <h1 className="title"> Weather Forecast !</h1>
        <div className="search">
            <input ref ={inputRef}type= "text" placeholder="Enter your city"></input>
            <img src={search_icon} onClick={() => search(inputRef.current.value)}></img>
        </div>
        <img src={weatherData.icon} className="weather_icon"/>
        <p className="temp">{weatherData.temp}°C</p>
        <p className="location">{weatherData.location}</p>
        <div className="weather-data">   
            <div className="col">   
                <img src={humidity}></img>
                <div>
                    <p className="humidity">{weatherData.humidity}</p>
                    <p>Humidity</p>
                </div>
            </div>
            <div className="">   
                <img src={wind}></img>
                <div>
                    <p className="humidity">{weatherData.wind}</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Weather