import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'


  const App = () => {
  const [countries, setCountries] = useState([])

  const [newQuery, setNewQuery] = useState('')
  
  const hook=() => {
    console.log('effect')
   axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])


  
  /*const [weather, setWeather] = useState([])
  const apiId='579099c15ea6e8d162a966c6ab84fc50'
  const capital="Paris"
  const hook2=() => {
  console.log('effect2')
  axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiId}`)
      .then(response => {
          setWeather(response.data)
      })

  }
  useEffect(hook2, [capital])
  console.log(weather)*/
















  const handleQueryChange = (event) => {
    setNewQuery(event.target.value)
    
 }

  return (
    <div>
      <h2>Countries</h2>
          <div>Find conuntry : <input onChange={handleQueryChange}/></div>
          <Countries countries={countries} newQuery={newQuery} setNewQuery={setNewQuery}/>

    </div>
  )
}

export default App