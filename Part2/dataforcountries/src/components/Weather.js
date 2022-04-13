import { useState, useEffect } from 'react'
import axios from 'axios'



const Weather = ({ capital }) => {
    const [weather, setWeather] = useState([])
    const apiId='579099c15ea6e8d162a966c6ab84fc50'
    const [queryState,setQueryState]=useState(false)
    const hook2=() => {
   
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiId}&units=metric`)
        .then(response => {
            setWeather(response.data)
            setQueryState(true)
        })
  
    }
    
    useEffect(hook2, [capital])
    if(queryState===true){
        const iconId=weather.weather[0].icon
    return(<>
    <h3>{weather.name}</h3>
    <p>Temparature {weather.main.temp} Celcius</p>
    <img src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} alt={iconId}/>
    <p>Wind {weather.wind.speed} m/s</p>

    </>)}
}

export default Weather