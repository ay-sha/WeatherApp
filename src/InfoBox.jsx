import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'


export default function InfoBox({info}) {
    const HOT_URL = 'https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const COLD_URL = 'https://images.unsplash.com/photo-1707405891666-80be05d1744d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const RAIN_URL = 'https://images.unsplash.com/photo-1641673132450-e757bb9fa1c9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <div className="infoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {info.humidity>80? RAIN_URL: info.temp>15 ? HOT_URL: COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity>80? <ThunderstormIcon />: info.temp>15 ? <WbSunnyIcon />: <AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature: {info.temp}&deg;C </p>
                        <p>Humidity: {info.humidity} </p>
                        <p>Minimum Temperature: {info.tempMin}&deg;C  </p>
                        <p>Maximum Temperature: {info.tempMax}&deg;C </p>
                        <p>The weather can be described as <b>{info.weather} </b> and feels like: {info.feelsLike}&deg;C </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}