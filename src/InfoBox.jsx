import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox(){
    const INIT_IMG="https://plus.unsplash.com/premium_photo-1667926195926-b210e1963e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjAlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let info={
      city: "Delhi",
      feelslike: 25.84,
      temp: 25.05,
      tempMin: 25.05,
      tempMax: 25.05,
      humidity: 47,
      weather: "haze",
    }
    return (
        <div className="InfoBox">
            
            <div className="Cardcontainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL:info.temp>15 ?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80 ? <ThunderstormIcon/>:info.temp>15 ?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature= {info.temp}&deg;C</p>
          <p> Humidity={info.humidity}</p>
          <p>TempMin={info.tempMin}</p>
          <p>TempMax={info.tempMax}</p>
          <p>Today's weather is <i>{info.weather} </i>and feels like {info.feelslike}&deg;C</p>
         
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    );

}