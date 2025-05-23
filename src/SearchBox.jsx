import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_Key = '7386497ea0ae3c1004555c9c00444554';

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city)
            setCity('');
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <br /> <br />
                <Button variant="contained" startIcon={<SearchIcon />} type='submit'>
                    Search
                </Button>
                {error && <p style={{color: 'red'}}>No Such Place Exist</p>}
            </form>
        </div>
    )
}