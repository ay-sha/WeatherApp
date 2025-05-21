import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp (){
    const [weatherInfo, setWeatherInfo] = useState({
        city: 'Dhaka',
        feelsLike: 25.99,
        humidity: 83,
        temp: 25.99,
        tempMax: 25.99,
        tempMin: 25.99,
        weather: "haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Weather App</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}