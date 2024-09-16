import InfoBox from "./InfoBox";
import SearchBox from "./Searchbox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({//initialization
        // city: "Delhi",
        feelslike: 25.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        // humidity: 47,
        weather: "haze",
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>

    );
}