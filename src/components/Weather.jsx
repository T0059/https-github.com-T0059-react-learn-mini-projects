import React, { useEffect } from "react";
import './Weather.css'
import search from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const Weather = () =>{
    const search = asycn (city) => {
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

        } catch (error) {
            
        }
    }
    useEffect(() => {
        search('Delhi');
    },[])

    return(
    <div className="weather">
        <h1 className="title"> Weather Forecast !</h1>
        <div className="search">
            <input type= "text" placeholder="Enter your city"></input>
            <img src={search}></img>
        </div>
        <img src={clear} className="weather_icon"/>
        <p className="temp">16 C</p>
        <p className="location">Delhi</p>
        <div className="weather-data">   
            <div className="col">   
                <img src={humidity}></img>
                <div>
                    <p className="humidity">50%</p>
                    <p>Humidity</p>
                </div>
            </div>
            <div className="">   
                <img src={wind}></img>
                <div>
                    <p className="humidity">3.6 km/hr</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Weather